import React from 'react'
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from 'axios';


const Recommendation = () => {
    const [hotelInput, setHotelInput] = useState("London");
    const [result, setResult] = useState();

    // async function getGPT() {
    //     try {
    //       const response = await fetch("/generate", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ hotel: hotelInput }),
    //       });
    
    //       const data = await response.json();
    //       console.log(data)
    //       if (response.status !== 200) {
    //         throw data.error || new Error(`Request failed with status ${response.status}`);
    //       }
    
    //       console.log(data.result)
    //       setResult(data.result);
    //       setHotelInput("");
    //     } catch(error) {
    //       // Consider implementing your own error handling logic here
    //       console.error(error);
    //       alert(error.message);
    //     }
    // }

    const apiKey = "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"
    const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions"; 

    // useEffect(() => {
    //     let ignore = false;
        
    //     if (!ignore)  getGPT()
    //     return () => { ignore = true; }
    //     },[]);

    const prompt = "Translate the following English text to French: 'Hello, how are you?'";
    const data = {
    prompt: prompt,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.7,
    };

    return(
        <div>
            <main className={styles.main}> 
                <h3>Name my pet</h3>
                <div className={styles.result}>{result}</div>
            </main>
        </div>

    )
}



export default Recommendation;