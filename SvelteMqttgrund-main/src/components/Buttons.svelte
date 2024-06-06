<script>
    import { onMount } from 'svelte';
    import { onSend, startConnect } from '../stores/mqttStore';
    import { isConnected } from '../stores/store';

    let keyState = {};
    let gamepadIndex = null;

    // Function to send MQTT message
    function sendMessage(direction) {
        const message = direction === 'up' ? 'up' :
                        direction === 'down' ? 'down' :
                        direction === 'right' ? 'right' :
                        direction === 'left' ? 'left' : '';

        // Publish the message to MQTT topic
        onSend('driver', message);
    }

    // Function to stop MQTT message
    function stopMessage() {
        onSend('driver', 'stop');
    }
    // Key inputs and their corresponding message
    onMount(() => {
        const handleKeydown = (event) => {
            if (!keyState[event.key]) {
                keyState[event.key] = true;
                switch(event.key) {
                    case 'w':
                    case 'W':
                        sendMessage('up');
                        break;
                    case 'a':
                    case 'A':
                        sendMessage('left');
                        break;
                    case 's':
                    case 'S':
                        sendMessage('down');
                        break;
                    case 'd':
                    case 'D':
                        sendMessage('right');
                        break;
                }
            }
        };

        const handleKeyup = (event) => {
            if (keyState[event.key]) {
                keyState[event.key] = false;
                stopMessage();
            }
        };
        
        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('keyup', handleKeyup);

        const handleGamepadInput = () => {
            const gamepads = navigator.getGamepads();
            const gamepad = gamepads[gamepadIndex];

            if (!gamepad) return;

            // Check R2 (button 7) and L2 (button 6)
            if (gamepad.buttons[7].pressed) {
                sendMessage('up');
            } else if (gamepad.buttons[6].pressed) {
                sendMessage('down');
            } else {
                // Check left analog stick (L3) axes
                const leftStickX = gamepad.axes[0];
                if (leftStickX < -0.5) {
                    sendMessage('left');
                } else if (leftStickX > 0.5) {
                    sendMessage('right');
                } else {
                    stopMessage();
                }
            }

            requestAnimationFrame(handleGamepadInput);
        };

        const detectGamepad = (event) => {
            gamepadIndex = event.gamepad.index;
            handleGamepadInput();
        };

        window.addEventListener('gamepadconnected', detectGamepad);

        // Cleanup the event listeners when the component is destroyed
        return () => {
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('keyup', handleKeyup);
            window.removeEventListener('gamepadconnected', detectGamepad);
        };
    });
</script>


<div class=" justify-center flex items-center" id="mainbox">
   
    <div class="flex flex-col items-center space-y-2 p-4">
        {#if $isConnected}
        
        <p class="text-green-500">Connected</p>
    {:else}
        <p class="text-red-500">Not Connected</p>
    {/if}
        <!-- Top Button -->
        <button class="btn variant-filled " on:click={() => sendMessage('up')}>
            Up</button>
        <!-- Middle Row of Buttons -->
        <div class="flex justify-between space-x-2 w-full">
            <button class="btn variant-filled" on:click={() => sendMessage('right')}>
                Right
            </button>
            <button class="btn variant-outline-secondary bg-cyan-300" disabled={$isConnected} on:click={startConnect}>
                Connect
            </button>
          <button class="btn variant-filled" on:click={() => sendMessage('left')}>
            Left
        </button>
        </div>
        
        <!-- Bottom Button -->
        <button class="btn variant-filled" on:click={() => sendMessage('down')}>
            Down
        </button>
      </div>
</div>
<style>
button{
    font-family: cursive;
}

</style>