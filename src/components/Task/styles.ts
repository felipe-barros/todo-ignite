import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#262626",
        alignItems: "center",
        marginBottom: 8,
        borderRadius: 8,
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    checkIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    title: {
        flex: 1,
        fontSize: 14,
    },
    titleDefault: {
        color: "#F2F2F2",
    },
    titleCompleted: {
        color: "#808080",
        textDecorationLine: "line-through",
    },
    litterIcon: {
        width: 32,
        height: 32,
        resizeMode: "contain"
    }
})