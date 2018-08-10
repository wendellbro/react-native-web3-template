/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://10.0.2.2:8545'));

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
    }
  }

  componentDidMount(){
    web3.eth.getBalance('0x5b70FA71C229bc72F329eaE54bf974Ff24afedE8', (err, balance) => {
      console.log('balance ' + balance);
      this.setState({balance});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Web3
        </Text>
        <Text style={styles.instructions}>
          API call : web3.eth.getBalance(address)
        </Text>
        <Text style={styles.instructions}>
          0x5b70FA71C229bc72F329eaE54bf974Ff24afedE8
        </Text>
        <Text style={styles.balance}>
          {this.state.balance/10e17} ETH
        </Text>
        <Text style={styles.instructions}>
          I hope for this to be the start of a painless journey into cross platform Ethereum mobile development
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  balance: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ff0000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
