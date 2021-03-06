# nodePiHue
A custom light switch built on the Philips Hue API for Raspberry Pi Zero W using [Johnny-Five](http://johnny-five.io/)

This project is an adaptation of an earlier project of mine which utilized a [Tessel 2](https://tessel.io/) microcontroller to accomplish the same goal. [Original Project](https://github.com/Bijesse/tesselHueSwitch)

### Raspberry Pi Zero W
I chose to move this project to the Raspberry Pi Zero W because it was more reliable. The Tessel 2 was sucking up a lot of power and would often only last about 6-10 hours before overheating. Not to mention the Tessel 2 has a VERY bright light on it which would illuminate the room at all times.

The Pi Zero was outfitted with Female GPIO pins to match the pins on a Tessel 2 and a new Heatsink to avoid overheating. After a few quick tests, it was ready for mounting next to the lightswitch in the living room. 

![image](https://i.imgur.com/TlsNESm.jpg)

![image](https://i.imgur.com/mwYpP9H.jpg)
