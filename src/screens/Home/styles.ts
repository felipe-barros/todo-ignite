import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 173,
        paddingHorizontal: 24,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    logo: {
        width: 110,
        height: 32,
        resizeMode: "contain",
    },
    inputContainer: {
        flexDirection: "row",
        position: "absolute",
        height: 54,
        bottom: -27,
        width: "100%",
    },
    content: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        paddingTop: 55,
        paddingHorizontal: 24
    },
    listHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
})