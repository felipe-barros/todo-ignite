import { View, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
    counter: number;
    type: "CREATED" | "COMPLETED";
    style?: ViewStyle;
}

function ListCounterBadge({ counter, type, style: styleOverride }: Props) {
    function getTitle() {
        switch (type) {
            case "CREATED":
                return "Criadas"
                break;
            default:
                return "Concluídas"
                break;
        }
    }
    
    function getTitleColor() {
        switch (type) {
            case "CREATED":
                return styles.badgeTitleCreated;
                break;
            default:
                return styles.badgeTitleCompleted;
                break;
        }
    }

    return (
        <View style={[styles.container, styleOverride]}>
            <Text style={[styles.badgeTitle, getTitleColor()]}>{getTitle()}</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counterTitle}>{counter}</Text>
            </View>
        </View>
    )
}

export default ListCounterBadge;