import React, { useEffect, useState } from "react";
import Aside from "./components/aside";
import Header from "./components/header";
import { useWindowSize } from "../helpers/useWindowSize";

export default function Menu() {
  const [asideClose, setAsideClose] = useState(false);
  let width = useWindowSize().width;


  useEffect(()=>{
    if(width < 700){
      document.documentElement.style.setProperty(
        "--appside-bar-width",
        "0rem"
      );
      setAsideClose(true)
    }else{
      document.documentElement.style.setProperty(
        "--appside-bar-width",
        "5rem"
      );
      document.querySelector('.rest-logo')?.classList.add('hide')
      setAsideClose(true)
    }
  }, [width])


  return (
    <div className="app-menu">
     { width > 700?  <Aside asideClose={asideClose} setAsideClose={setAsideClose} />: null}
      <Header/>
    </div>
  );
}
