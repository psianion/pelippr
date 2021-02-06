import React from 'react'
import { Text, View, Image } from "react-native"
import { TweetType } from '../../../types';
import { Ionicons } from "@expo/vector-icons"

import MainContainerFooter from "./Footer"
import styles from "./styles"

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({tweet}: MainContainerProps) => (
    <View style={styles.container}>
        {/* Username */}
        <View style={styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderNames}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>@{tweet.user.username}</Text>
                <Text style={styles.createdAt}>15s</Text>
            </View>
            <View>
            <Ionicons name={"chevron-down"} size={18} color={"grey"} />
            </View>
        </View>
        {/* Content */}
        <View>
            <Text style={styles.content}>{tweet.content}</Text>
            {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
        </View>
        {/* TweetFoot */}
        <MainContainerFooter tweet={tweet}/>
    </View>
)

export default MainContainer;