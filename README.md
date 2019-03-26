Muzeum SNR App
==============

This app accompanies the permanent exhibition at the [Museum of the Slovak National Councils](https://www.snm.sk/?introduction-1), opened since 2019.
It is an open source mobile application built using Ionic, written entirely in HTML, CSS and TypeScript, and runs on numerous platforms (tested for iOS).

<p align="center">
  <a href="https://itunes.apple.com/sk/app/m%C3%BAzeum-snr/id1455228900?mt=8"><img src="appstore.svg" alt="Download on the App Store"></a>
</p>

The app uses:

* Ionic: https://ionicframework.com/
* Cordova: https://cordova.apache.org/

## Installation

Requires [Node.js](https://nodejs.org/)

```
npm install -g ionic
npm install
```

## Usage

To start a local server to run the app in your browser:

```
ionic serve
```


## Building Native Apps

More info on how to use Ionic and Cordova to build native apps for various platform can be found on the [Ionic documentation](https://ionicframework.com/docs/building/ios).

```
ionic cordova prepare ios
```
or
```
ionic cordova prepare ios --prod
```
