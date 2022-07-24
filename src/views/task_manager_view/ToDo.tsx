import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import ToDoStore from "../../viewmodels/ToDoStore";

const ToDo = () => {
    const toDoStore = ToDoStore.getToDoStore()

    const [incidenceToDo, setIncidence] = useState<string>('')
    const [incidenceProgress, setIncidenceProgress] = useState<string>('')

    function handleAddTask() {
        toDoStore.addIncidenceToDo(incidenceToDo)
    }
    function handleAddTaskProgress() {
        toDoStore.addIncidenceProgress(incidenceProgress)
    }

    return (
        <>
            {toDoStore.getTableToDo.table.map((type, index) => {
                return (
                    <div>
                        <h1>{type.title}</h1>
                        {type.task.map((incidenceToDo, num) => <h2>{incidenceToDo.title}</h2>)}
                    </div>
                )
            })}
            Task:<input type="text" onChange={(e) => {
                setIncidence(e.target.value)
            }}></input>
            <button onClick={handleAddTask}>Add Task</button>
            <br />
            Task:<input type="text" onChange={(e) => {
                setIncidenceProgress(e.target.value)

            }}></input>
            <button onClick={handleAddTaskProgress}>Add Task Progress</button>
        </>
    )
}
export default observer(ToDo)