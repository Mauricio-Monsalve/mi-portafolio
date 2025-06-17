import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useContext } from "react";
import { AnimationContext } from "../contexts/AnimationContext.jsx";

function Header() {

  const navegarA = useNavigate();
  const {showHandler, hideHandler} = useContext(AnimationContext);

  const navigateHandler = (event, donde) => {
    event.preventDefault();
    hideHandler();
    setTimeout(() => {
      navegarA(donde);
      showHandler();
    }, 500);
  };

  return (
    <header className="Header">
      <img src="https://placehold.co/500" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="#" onClick={(e)=>navigateHandler(e,"/")}>Home</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>navigateHandler(e,"/about")}>About</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>navigateHandler(e,"/skills")}>Skills</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>navigateHandler(e,"/training")}>Training</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>navigateHandler(e,"/projects")}>Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header