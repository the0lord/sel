import React from "react";

const Tw = ({ children, cn, component = <div></div> }) => {
    return React.cloneElement(component, {
        children,
        className: cn
    })
}

export default Tw;