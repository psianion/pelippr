import * as React from 'react';
import { StyleSheet } from 'react-native';

import Feed from "../components/Feed"
import { Text, View } from '../components/Themed';
import NewTweetButton from "../components/NewTweetButton"
import tweets from "../data/tweets";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

