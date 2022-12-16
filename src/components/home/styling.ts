import React from "react"

export const mainContainer = (opacity : string) => {
 const style : React.CSSProperties = { height:"100vh",
  width:"100vw",
  opacity : opacity,
  transition : "0.3s"
}
return style
}

export const imageDiv = (index : string, rotate : string,scale : string) =>  {
  const styles : React.CSSProperties = { 
    height:"300px",
    width:"300px",
    transform : `rotate(${rotate}) scale(${scale})`,
    borderRadius : "10px",
    transition : "0.3s"
}
return styles
}

export const imagestyle : React.CSSProperties = {
  borderRadius:"10px",
  height : "100%",
  position:"absolute",
  zIndex:"10",
  objectFit:"cover"
 
}