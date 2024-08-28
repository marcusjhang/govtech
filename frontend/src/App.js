import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleAdd = async () => {
        const response = await axios.post('http://localhost:5001/api/add', 
            new URLSearchParams({ num1: num1 || 0, num2: num2 || 0 })
        );
        setResult(response.data.result);
    };

    const handleSubtract = async () => {
        const response = await axios.post('http://localhost:5001/api/subtract', 
            new URLSearchParams({ num1: num1 || 0, num2: num2 || 0 })
        );
        setResult(response.data.result);
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
                placeholder="Enter first number"
            />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)} 
                placeholder="Enter second number"
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default App;