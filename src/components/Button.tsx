import { useState } from 'react'
import '../styles/global.css'

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1);

    function inc() {
        setCounter(counter + 1)
    }

    return (
        <button type="button" style={{color : props.color}}
            onClick={inc}>
            Botão <strong>{props.children} - {counter}</strong>
        </button>
    );
}