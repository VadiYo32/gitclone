import { useState } from "react";

function ListItem ({text, onDelete})
{
    const[checked , setChecked] = useState(false);
    const handleCheck =() => {
            setChecked(!checked);
        }
    return (
            <li className={`flex items-center justify-normal rounded-md "p-5 bg-indigo-800 ${checked ? 'line-through':null}"`}>
               <input type="checkbox" checked={checked} onChange={handleCheck}/>
               <div>
               <span>{text}</span> <button onClick={onDelete}  className="rounded-md bg-red-500 p-2 hover:bg-red-700 ">delet</button>
               </div>
            
            </li>
            );
}

export default ListItem;