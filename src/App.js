import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const [value, setValue] = useState(0);
    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
        setValue(value + 2);
        console.log('counter', counter, 'counter2 state는', counter2);
    }

    useEffect(() => {
        console.log('useEffect 1 Fire!! : componentDidMount()')
    }, []);

    useEffect(() => {
        console.log('useEffect 2 Fire!! : componentDidUpdate()', counter2, value)
    }, [counter2, value]);

    return (
        <div className="App">
            {console.log('render')}
            <button onClick={increase}>버튼</button>
        </div>
    );
}

export default App;
