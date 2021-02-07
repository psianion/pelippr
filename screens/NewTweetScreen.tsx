import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

import { AntDesign } from "@expo/vector-icons"
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] =useState("")

  const onPostTweet = () => {
    console.log(`Posting the tweet: ${tweet} with Image ${imageUrl}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name={"close"} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet} >
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <View>
          <ProfilePicture image={"https://www.insider.com/public/assets/INSIDER/US/logos/insider-placeholder.png"} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput value={tweet} onChangeText={(value) => setTweet(value)} multiline={true} placeholder={"What's happening?"} style={styles.tweetInput} numberOfLines={3} />
          <TextInput value={imageUrl} onChangeText={(value) => setImageUrl(value)} placeholder={"Image?"} style={styles.imageInput} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: "white"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 35
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 17
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 20,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 18
  },
  imageInput: {

  }
});

