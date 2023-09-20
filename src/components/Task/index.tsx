import { useState } from "react";
import { View, Text, Image, ViewStyle, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

const check = require("../../assets/img/check.png");
const checkHover = require("../../assets/img/checkHover.png");
const checkComplete = require("../../assets/img/checkComplete.png");
const checkCompleteHover = require("../../assets/img/checkCompleteHover.png");
const litterBox = require("../../assets/img/litterBox.png");
const litterBoxHover = require("../../assets/img/litterBoxHover.png");

type Props = {
    title: string;
    completed: boolean;
    style?: ViewStyle;
    onPressComplete: () => void;
    onPressRemove: () => void;
}

export function Task({ title, completed, onPressComplete, onPressRemove, style: styleOverride }: Props) {
    const [isCompleteButtonHover, setIsCompleteButtonHover] = useState<boolean>(false);
    const [isRemoveButtonHover, setIsRemoveButtonHover] = useState<boolean>(false);

    function handlePressInCompleteButton() {
        setIsCompleteButtonHover(!isCompleteButtonHover);
    }

    function handlePressInRemoveButton() {
        setIsRemoveButtonHover(!isRemoveButtonHover);
    }

    function getCompleteButtonImage() {
        if (isCompleteButtonHover) {
            if (completed) return checkCompleteHover;
            return checkHover;
        }
        if (completed) return checkComplete;
        return check;
    }

    function getRemoveButtonImage() {
        if (isRemoveButtonHover) return litterBoxHover;
        return litterBox;
    }

    return (
        <View style={[styles.container, styleOverride]}>
            <View style={styles.leftContainer}>
                <TouchableWithoutFeedback
                    onPress={onPressComplete}
                    onPressIn={handlePressInCompleteButton}
                    onPressOut={handlePressInCompleteButton}
                >
                    <Image source={getCompleteButtonImage()} style={styles.checkIcon} />
                </TouchableWithoutFeedback>
                <Text style={[styles.title, styles.titleDefault, completed && styles.titleCompleted]}>{title}</Text>
            </View>
            <TouchableWithoutFeedback
                onPress={onPressRemove}
                onPressIn={handlePressInRemoveButton}
                onPressOut={handlePressInRemoveButton}
            >
                <Image source={getRemoveButtonImage()} style={styles.litterIcon} />
            </TouchableWithoutFeedback>
        </View>
    )
}