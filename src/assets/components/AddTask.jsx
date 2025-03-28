import { useState } from "react";
import Input from "./input";



function AddTask({onAddTaskSubmit}){
    const [title,setTitle] = useState("");
    const[description,setDescription] = useState("");

    return(
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

        <Input 
        type="text"
         placeholder="Type the task title"  
         value={title}
        onChange={(event) => setTitle(event.target.value)}
        /> 

        <Input 
        type="text"
         placeholder="Type the task description" 
         value={description}
        onChange={(event) => setDescription(event.target.value)}
        />

        <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"  onClick={() => {
            //verify if title and description are fullfilled
            if(!title.trim() || !description.trim()){
                return alert("Write the title and the description");
            }
            
            onAddTaskSubmit(title,description);
            setTitle("");
            setDescription("");
            
            
            }} 
            >
            Add
        </button>

    </div>
    );
}

export default AddTask;