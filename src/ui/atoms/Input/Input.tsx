import { useState } from "react";
import * as proptypes from "./Input.proptypes";
import * as styles from "./Input.styles";

import { Icon } from "@atoms";

export default function Input({iconType, placeholder, type } : proptypes.InputProps){

    const [isFocus, setIsFocus] = useState(false);
    const [inputType, setInputType ] = useState(type);

    const handleFocus = () => {
        setIsFocus(!isFocus);
    }

    return(
        <div className={styles.container}>
            <span className={styles.spanlabel(isFocus)}>{ placeholder }</span>
            <input 
                className={styles.input} 
                onFocus={handleFocus} 
                onBlur={handleFocus} 
                type={inputType} 
                placeholder={placeholder}
            />
            <div className={styles.icon} 
                onMouseDown={() => setInputType("text")}
                onMouseUp={() => setInputType("password")}
            >
                <Icon iconType={iconType} />
            </div>
        </div>
    )
}