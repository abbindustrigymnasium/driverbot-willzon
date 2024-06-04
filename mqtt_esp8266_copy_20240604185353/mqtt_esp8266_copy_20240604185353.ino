#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Servo.h>

// Update these with values suitable for your network and MQTT server
const char* ssid = "ABB_Gym_IOT";
const char* password = "Welcome2abb";
const char* mqtt_server = "maqiatto.com";
const int mqtt_port = 1883;  // Default port for MQTT
long duration;      // Variable to store duration of ultrasonic sensor pulse
int distance;    

// Maqiatto MQTT credentials
const char* mqtt_user = "willfried.bigira@hitachigymnasiet.se";  // Replace with your Maqiatto username
const char* mqtt_pass = "Junior2005";       // Replace with your Maqiatto password

WiFiClient espClient;
PubSubClient client(espClient);
#define motorSpeedPin 5
#define motorDirPin 0       
#define TRIG_PIN D5
#define ECHO_PIN D6

void checkDistance() {
    // Sending ultrasonic pulse
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
 
    // Reading echo duration and calculating distance
    duration = pulseIn(ECHO_PIN, HIGH);
    distance = duration * 0.034 / 2;
 
    // Printing distance for debugging
    Serial.print("Distance: ");
    Serial.println(distance);
   
   if (distance >= 1 && distance <= 300){
     if (distance < 20) {
     digitalWrite(motorDirPin, 1);
    analogWrite(motorSpeedPin,128);
    Serial.println(" Object Detcted, Moving backwards");
     } else {
       // Stop the motor
    Serial.println("Obejct not detected");
    delay(5000);
    }
  } 
    
    
  }

Servo myservo;

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String message;
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.println(message);

  // Process the message
  if (message == "up") {
    analogWrite(motorSpeedPin, 512);
    digitalWrite(motorDirPin, 0);
  } 
  if (message == "left") {
    myservo.write(25);
  } 
  if (message == "right") {
    myservo.write(145);
  } 
  if (message == "down"){
    digitalWrite(motorDirPin, 1);
    analogWrite(motorSpeedPin, 512);
  }
  if(message == "stop"){
    myservo.write(90);
    analogWrite(motorSpeedPin, 0);
  }
  
  
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    client.connect(clientId.c_str(), mqtt_user, mqtt_pass);
    // Attempt to connect with MQTT credentials
    if (client.connect(clientId.c_str(), mqtt_user, mqtt_pass)) {
      client.subscribe("willfried.bigira@hitachigymnasiet.se/test");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  pinMode(motorSpeedPin,OUTPUT);
  pinMode(motorDirPin,OUTPUT);
  pinMode(TRIG_PIN,OUTPUT);
  pinMode(ECHO_PIN, INPUT);  
  myservo.attach(D7);
  myservo.write(90);
}

void loop() {
  checkDistance(); 
  
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

 

}
