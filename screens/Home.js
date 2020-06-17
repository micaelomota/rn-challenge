import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import Tweets from '../components/tweets';

export default function Home(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.account.user.title}</Text>
      {props.account.isLoading ? <ActivityIndicator/> :
        <Tweets data={props.account.user.data}/> }
      <Button
        onPress={() => props.toggleAccount(props.account.user)}
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
