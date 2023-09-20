import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listEmptyContainer: {
        width: "100%",
        height: 208,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#333333",
    },
    listEmptyImage: {
        width: 56,
        height: 56,
        resizeMode: "contain",
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 14,
        color: "#808080",
        fontWeight: "bold",
    },
    emptySubtitle: {
        fontSize: 14,
        color: "#808080",
    }
})