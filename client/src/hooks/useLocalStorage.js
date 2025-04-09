import { useState } from "react";

export default function useLocalStorage(statekey, inState) {
    const [state, setState] = useState(() => {
        const statejson = localStorage.getItem(statekey);

        if(!statejson)
        {
            return typeof inState === 'function' ? inState() : inState;
        }
        const data = JSON.parse(statejson);

        return data;
    });

    const setPState = (int) => {
        const data = typeof int === 'function' ? int(state) : int;
        const perData = JSON.stringify(data);

        localStorage.setItem(statekey, perData);

        setState(data);
    };

    return [
        state,
        setPState
    ]
};