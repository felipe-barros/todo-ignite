import { Image, View, Text } from "react-native";
import { styles } from "./styles";

const clipboard = require("../../assets/img/clipboard.png");

export default function ListEmptyComponent() {
    return (
        <View style={styles.listEmptyContainer}>
            <Image source={clipboard} style={styles.listEmptyImage} />
            <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}