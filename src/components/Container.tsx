// add the styles as props rather than hardcode them in the component returned JSX
// if you want to use CSS styles as props within a component then the prop has to be assigned to the type React.CSSProperties
import React from "react"

interface ContainerProps {
    styles: React.CSSProperties
}

const Container = ({
    styles
}: ContainerProps) => {
    return (
        <div style={styles}>
            Content goes here
        </div> 
   )
}
export default Container;;