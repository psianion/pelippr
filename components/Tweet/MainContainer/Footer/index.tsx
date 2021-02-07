import React from 'react'
import { Text, View } from "react-native"
import { TweetType } from '../../../../types';
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons"

import styles from "./styles"

export type MainContainerFooterProps = {
    tweet: TweetType
}

const MainContainerFooter = ({tweet}: MainContainerFooterProps) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Feather name={"message-circle"} size={20} color={"grey"} />
            <Text style={styles.number}>{tweet.numberOfComments}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"retweet"} size={29} color={"grey"} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
        <View style={styles.iconContainer}>
            <AntDesign name={"hearto"} size={20} color={"grey"} />
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"share-google"} size={28} color={"grey"} />
        </View>
    </View>
)

export default MainContainerFooter;