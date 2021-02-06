import React from 'react'
import { Text, View, Image } from "react-native"
import { TweetType } from '../../../../types';
import { Ionicons } from "@expo/vector-icons"

import styles from "./styles"

export type MainContainerFooterProps = {
    tweet: TweetType
}

const MainContainerFooter = ({tweet}: MainContainerFooterProps) => (
    <View style={styles.container}>
        <Text>Hello</Text>
    </View>
)

export default MainContainerFooter;