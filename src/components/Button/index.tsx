import { useState } from "react";
import { View, Image, TouchableWithoutFeedback, ViewStyle } from "react-native";
import { styles } from "./styles";

const plus = require("../../assets/img/plus.png");

type Props = {
    onPress: () => void;
    style?: ViewStyle;
};

export default function Button({ onPress, style: styleOverride }: Props) {
    const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

    function handlePressInButton() {
        setIsButtonHover(!isButtonHover);
    }

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            onPressIn={handlePressInButton}
            onPressOut={handlePressInButton}
            style={styleOverride}
        >
            <View style={[styles.container, isButtonHover && styles.containerHover]}>
                <Image source={plus} style={styles.buttonIcon} />
            </View>
        </TouchableWithoutFeedback>
    )
}