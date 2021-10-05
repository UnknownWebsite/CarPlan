import React, { ReactNode } from "react";

export interface Props {
    /**Weather the scaffold is disabled*/
    disabled?: boolean;

    /**The children */
    children: React.ReactNode
}

function Scaffold(props: Props) {
    const updatedChildren: React.ReactElement[] = [];

    function updateProps(node: ReactNode) {

        if (React.isValidElement(node)) {
            updatedChildren.push(
                React.cloneElement(
                    node,
                    { disabled: props.disabled }
                )
            )
        }
    }

    if (Array.isArray(props.children)) {
        props.children.forEach(updateProps)
    } else {
        updateProps(props.children)
    }
    return (
        <div>
            {updatedChildren}
        </div>
    )
}

export default Scaffold;