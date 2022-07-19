import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App= ()=>{

    const[inputList, setInputList] = useState("");
    const[Items, setItems] = useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value); 
    };
   
    const listofItems=()=>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deletItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrelem, index)=>{
                return index !== id;
            })
        })
    }

    return(
    <>  
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
                <button onClick={listofItems}>+</button>
                <ol>
                    {Items.map( (itemval, index) =>{
                       return <ToDoList text={itemval} id={index}  key={index} onSelect={deletItems}/>
                    })}
                    
                </ol>
            </div>
        </div>
    </>
    );
};

export default App;