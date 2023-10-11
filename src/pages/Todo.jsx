import { useRef, useState } from "react";
import ListItem from "../components/listitem";

function Todo()
{
    
    const[todos, setTodo]=useState([]);
    const inputRef = useRef(null);    
    const addTodo = () => 
    {
        const todovalue = inputRef.current.value;
        console.log(todovalue); 
        setTodo([...todos,todovalue])
    };
    

    return <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input ref={inputRef} type = "text" className="bg-[#444] rounded-md p-2"/> 
                    <button  onClick={addTodo} className=" rounded-md bg-indigo-600 px-4 py-2" >add to do </button>
                </div>
                <ul className="flex flex-col gap-2">
                    {
                        todos.map((value,index) => 
                        { 
                            return <ListItem key={index} text={value} />
                        })
                    }
                </ul>
            </div> 
    
}

export default Todo;