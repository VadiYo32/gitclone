import ListItem from "../components/listitem";

function Todo()
{
    return <div>
                <ul>
                    <ListItem text="item1" />
                    <ListItem text={"item2"} checked={true} />
                    <ListItem text={"item3"} />
                    <ListItem text={"item4"} />
                </ul>
            </div> 
    
}

export default Todo;