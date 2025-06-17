import { createContext, useEffect, useRef } from "react"
import Header from "../components/Header.jsx";

export const AnimationContext = createContext();

function AnimationProvider({children}) {

  const refMain = useRef();

  const showHandler = () => {
    refMain.current.classList.add("mostrar-vista");
    setTimeout(() => {
      refMain.current.classList.remove("mostrar-vista");
    }, 500);
  };
  
  const hideHandler = () => {
    refMain.current.classList.add("ocultar-vista");
    setTimeout(() => {
      refMain.current.classList.remove("ocultar-vista");
    }, 500);
  }

  useEffect(()=>{
    showHandler();
  },[]);

  return (
    <AnimationContext.Provider value={{showHandler, hideHandler}}>
      <Header/>
      <main className="Main" ref={refMain}>
        {children}
      </main>
    </AnimationContext.Provider>
  )
}

export default AnimationProvider