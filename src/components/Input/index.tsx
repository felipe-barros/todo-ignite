import { useState } from "react";
import { TextInput, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
    value: string;
    placeholderText?: string;
    onChangeText: (text: string) => void;
    style?: ViewStyle;
}

export function Input({ value, onChangeText, placeholderText, style: styleOverride }: Props) {
    const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

    function handleOnFocus() {
        setIsInputOnFocus(true);
    };

    function handleOnBlur() {
        setIsInputOnFocus(false);
    }

    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholderText}
            placeholderTextColor="#808080"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            style={[styles.input, isInputOnFocus && styles.inputOnFocus, styleOverride]}
        />
    )
}