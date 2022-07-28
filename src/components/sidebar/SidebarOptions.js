import React from 'react';
import "./sidebar.css"

const SidebarOptions = ({active, text, Icon}) => {
  return (
    <div className={`sidebar-option ${active && "sidebar-option-active"}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions