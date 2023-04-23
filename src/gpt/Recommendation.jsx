import React from 'react'
import { useState, useEffect } from "react";
import styles from "./index.module.css";

const Recommendation = ({  }) => {
    const [hotelInput, setHotelInput] = useState("");
    const [result, setResult] = useState();

    async function getGPT() {
        try {
          const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ hotel: hotelInput }),
          });
    
          const data = await response.json();
          console.log(data)
          if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`);
          }
    
          console.log(data.result)
          setResult(data.result);
          setHotelInput("");
        } catch(error) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(error.message);
        }
    }

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  getGPT()
        return () => { ignore = true; }
        },[]);

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