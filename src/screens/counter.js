// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { incrementCounter, decrementCounter } from '../store/actions';

const Counter = ({ counter, increment, decrement }) => (
  <View>
    <Text>{counter}</Text>
    <Button title="+" onPress={increment} />
    <Button title="-" onPress={decrement} />
  </View>
);

const mapStateToProps = state => ({
  counter: state.counter,
});

console.log(state);

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);