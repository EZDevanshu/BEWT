"use client"

import { useState } from "react"

function Calculator() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState<number | null>(null)

    const calculate = (operation: string) => {
        const a = parseFloat(num1)
        const b = parseFloat(num2)

        if (isNaN(a) || isNaN(b)) {
            alert("Please enter valid numbers")
            return
        }

        let answer: number

        switch (operation) {
            case "+":
                answer = a + b
                break
            case "-":
                answer = a - b
                break
            case "*":
                answer = a * b
                break
            case "/":
                if (b === 0) {
                    alert("Cannot divide by zero")
                    return
                }
                answer = a / b
                break
            default:
                return
        }

        setResult(answer)
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
            <h1>Calculator</h1>
            
            <div style={{ marginBottom: "15px" }}>
                <input
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    style={{ width: "100%", padding: "8px", marginBottom: "10px", fontSize: "16px" }}
                />
                <input
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    style={{ width: "100%", padding: "8px", fontSize: "16px" }}
                />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "15px" }}>
                <button onClick={() => calculate("+")} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>+</button>
                <button onClick={() => calculate("-")} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>-</button>
                <button onClick={() => calculate("*")} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>×</button>
                <button onClick={() => calculate("/")} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>÷</button>
            </div>

            {result !== null && (
                <div style={{ padding: "15px", backgroundColor: "black", borderRadius: "4px", textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                    Result: {result}
                </div>
            )}
        </div>
    )
}

export default Calculator