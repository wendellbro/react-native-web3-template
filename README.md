# react-native-eth-template
use ethereum web3 interface in react native

# Env
node		v8.11.3
npm		v6.3.0


# step1
npm install

# step2
react-native run-android
or
react-native run-ios


# remark
crypto and crypto-browserify
to use crypto-browserify, all you need to do is browserify a node module that uses node's crypto module. like many of the other core node modules, 
crypto-browserify will insert a   javascript implementation to run crypto.js in the browser.
but you need import  node-libs-browser in rn-cli.config.js.