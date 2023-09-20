import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    badgeTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    badgeTitleCreated: {
        color: "#4EA8DE",
    },
    badgeTitleCompleted: {
        color: "#8284FA" 
    },
    counterContainer: {
        width: 25,
        height: 19,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        borderRadius: 50,
        marginLeft: 8
    },
    counterTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#D9D9D9"
    }
})