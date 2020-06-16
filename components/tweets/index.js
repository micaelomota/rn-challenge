import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

const tweets = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
]

export default function Tweets(props) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => setData(json.movies))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.account.title}</Text>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({item}) => renderTweet(item)}
                />
            )}
        </View>
    )
}

function renderTweet(item) {
    return (
        <Text style={styles.item}>{item.title}, {item.releaseYear}</Text>
    )
}

function getMoviesFromApi() {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

const styles = StyleSheet.create({
    title: { 
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
     flex: 1,
     paddingTop: 22,
    },
    item: {
      padding: 8,
      fontSize: 18,
      height: 30,
    },
  })