import "./darkMode.css";
import Sun from "../../img/sunny.png"
import Moon from "../../img/moon.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const DarkMode = () => {
    const theme = useContext(ThemeContext)
    
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
    return(
        <div className="d">
            <img src={Sun} alt="" className="d-icon" />
            <img src={Moon} alt="" className="d-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25  }}></div>
        </div>
        
    )
}

export default DarkMode;