import { observer } from "mobx-react-lite";
import React from "react";

import CounterStore from "../viewmodels/CounterStore";

const Count = () => {
    const counterStore = CounterStore.getCounterStore()

    function handleIncrement(){
        counterStore.incrementCount()
    }

    return(
        <>
          
        </>
    )
}

export default observer(Count)