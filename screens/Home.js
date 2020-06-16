import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Tweets from '../components/tweets';

export default function Home(props) {
  console.log('same', props);

  return (
    <View style={styles.container}>
      <Tweets account={props.account} />
      <Button
        onPress={() => props.toggleAccount(props.account)}
        title="Switch accounts"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
