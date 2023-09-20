import { useMemo, useState } from "react";
import { Image, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { ListCounterBadge } from "../../components/ListCounterBadge";
import { Input } from "../../components/Input";
import { ListEmptyComponent } from "../../components/ListEmptyComponent";
import { Task } from "../../components/Task";
import { Button } from "../../components/Button";

const logo = require("../../assets/img/logo.png");

type TaskType = {
    title: string;
    completed: boolean;
};

export default function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [task, setTask] = useState<string>("");

    const createdTasksCounter = useMemo(() => tasks.length, [tasks]);
    const completedTasksCounter = useMemo(() => tasks.filter(t => t.completed).length, [tasks]);

    function createNewTask(title: string, completed: boolean = false): TaskType {
        return {
            title,
            completed
        }
    }

    function handleOnPressAddTask() {
        if (!task) return;

        const newTask = createNewTask(task);
        setTasks(prevState => [...prevState, newTask]);
        setTask("");
    }

    function handleOnPressComplete(index: number) {
        const updatedTasks = [...tasks];
        const t = updatedTasks[index];
        updatedTasks[index] = createNewTask(t.title, !t.completed);

        setTasks(updatedTasks);
    };

    function handleOnPressRemove(index: number) {
        Alert.alert("Remover tarefa", "Quer mesmo remover essa tarefa?", [
            {
                text: "Sim",
                style: "destructive",
                onPress: () => setTasks(prevState => prevState.filter((t, i) => i !== index))
            },
            {
                text: "Não",
                style: "cancel",
            }
        ])
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.inputContainer}>
                    <Input
                        value={task}
                        onChangeText={setTask}
                        placeholderText="Adicione uma nova tarefa"
                    />
                    <Button onPress={handleOnPressAddTask} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.listHeader}>
                    <ListCounterBadge type="CREATED" counter={createdTasksCounter} />
                    <ListCounterBadge type="COMPLETED" counter={completedTasksCounter} />
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString() + item.title}
                    renderItem={({ item, index }) =>
                        <Task
                            title={item.title}
                            completed={item.completed}
                            onPressComplete={() => handleOnPressComplete(index)}
                            onPressRemove={() => handleOnPressRemove(index)}
                        />}
                    ListEmptyComponent={<ListEmptyComponent />}
                    ListFooterComponent={() => <View style={styles.emptyView} />}
                />
            </View>
        </View>
    )
}