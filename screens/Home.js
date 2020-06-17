import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Tweets from '../components/tweets';

export default function Home(props) {
  console.log(`render HOME size: ${props.account.data.length}`);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.account.title}</Text>
      <Tweets data={props.account.data}/>
      <Button
        onPress={() => props.toggleAccount(props.account)}
        title="Switch accounts"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
  },
});
