import React, { useState } from "react";
import axios from "axios";

export const App = () => {
    const [formData, setFormData] = useState("");
    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_PATH,
                { text: formData },  // データをJSON形式に変更
                { headers: { 'Content-Type': 'application/json' } }  // Content-Typeを指定
            );
            console.log(response);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Text:
                <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
