import React from 'react'

const header = ({dark,children,className,containerClassName}) => {
    dark=!!dark?"dark":"light";
    return (
        <nav className={"navbar navbar-light bg-light"+(className?" "+className:"")}>
        <div class="container-fluid">
          <span 
          className={"navbar-brand mb-0 h1" + (containerClassName?" "+containerClassName:"")}>{children}</span>
        </div>
      </nav>
    )
}

export default header
