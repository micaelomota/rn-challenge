import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text, View,
  FlatList,
} from 'react-native';

export default function Tweets(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString() }
        renderItem={({item}) => renderTweet(item)}
      />
    </View>
  );
}

function renderTweet(item) {
  return (
    <View style={styles.tweetContainer}>
      {/* <Text style={styles.item}>{item.user.name}</Text> */}
      <Text style={styles.tweetText}>{item.text}</Text>
      <Text style={styles.tweetDate}>{item.created_at}, {item.user.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    // flex: 1,
    // padding: 8,
    // fontSize: 18,
    // height: 30,
  },
  tweetContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    flexDirection: 'column',
    // paddingLeft: 35,
    // paddingBottom: 5,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  tweetDate: {
    marginTop: 3,
    fontSize: 10,
  },
  tweetText: {
    fontSize: 16,
  },
});
