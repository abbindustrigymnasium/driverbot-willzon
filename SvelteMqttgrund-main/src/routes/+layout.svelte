<script lang="ts">
	import Navigation from './../components/Navigation.svelte';
	import '../app.postcss';
	import {AppBar,AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
    let currentTile: number = 0;
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores();

const drawerStore = getDrawerStore();
function drawerOpen(): void {
	drawerStore.open({});
}
</script>


<Drawer position="right" width=" w-44">
	<Navigation/>

</Drawer>


<AppShell>


		<!-- App Bar -->
		
    <AppBar>
		<!-- General layout for the website-->
		<svelte:fragment slot="trail">
    <div class="flex items-center">
        <button class=" btn btn-sm mr-4" on:click={drawerOpen}>
            <span>
                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
        </button>
        <strong class="text-xl uppercase">Skeleton</strong>
    </div>
</svelte:fragment>
		
		<svelte:fragment slot="lead">
			<img src="carwhite.png" alt="car" class=" size-16">
			
		</svelte:fragment>
	    
		
		<svelte:fragment slot="headline">
			<h1 class=" text-2xl">DRIVERBOT</h1>
		</svelte:fragment>
        
	
	
	</AppBar>

    

	
	
	<!-- Page Route Content -->
	<slot />

</AppShell>
	<style lang="postcss">
		:global(body){
			@apply overflow-visible;
		}
	</style>


