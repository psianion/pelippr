import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    tweetHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tweetHeaderNames: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        marginRight: 5,
        fontWeight: "bold",
        fontSize: 15,
    },
    username: {
        marginRight: 5,
        fontSize: 15,
        color: "grey",
    },
    createdAt: {
        marginRight: 5,
        fontSize: 13,
        color:"grey",
    },
    content: {
        marginTop: 5,
        lineHeight: 18,
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        height: 300,
        borderRadius: 15,
        overflow: "hidden",
        marginVertical: 10,
    }
})

export default styles;