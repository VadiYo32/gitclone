import { useState } from "react";

function ListItem ({text, checked, onDelete})
{
    const[setChecked] = useState(false);
    const handleCheck =() =>
        {
            setChecked(!checked);
        }
    return (
            <li className={`rounded-md "p-3 bg-indigo-800 ${checked ? 'line-through':null}"`}>
                {text}
            <input type="checkbox" checked={checked} onChange={handleCheck}/>
            </li>
            );
}

export default ListItem;