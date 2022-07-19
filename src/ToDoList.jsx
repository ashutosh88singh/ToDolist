import React from "react";

const ToDoList = (props)=>{

    

    return (
        <>
            <div className="todo_style">
                <p onClick={()=>{
                    props.onSelect(props.id);
                }} >X</p>
                
                <li>{props.text}</li>
            </div>
        </>
    );

};

export default ToDoList;