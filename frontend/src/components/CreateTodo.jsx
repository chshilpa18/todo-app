import { useState } from "react";

export function CreateTodo()  {
	// react query 
	//or 
	//create local state variables to get the input values
		const [title, setTitle] = useState("");
		const [description, setDescription] = useState("");


	return <div>
		<input style={{
			padding:10,
			margin:10
		}} type="text" placeholder="title" onChange={function(e){
			const value = e.target.value;
			setTitle(value)
		}}></input><br></br>
		<input style={{
			padding:10,
			margin:10
		}} type="text" placeholder="description" 
		onChange={function(e){
			const value = e.target.value;
			setTitle(value)
		}}></input><br></br>
		<button style={{
			padding:10,
			margin:10
		}} onClick={() => {
			// axios
			fetch("http://localhost:3000/todo", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				description: desc
			}),
			headers: {
				"Content-type": "application/json"
			}
		})
		.then(async function(resp){
			const res = await resp.json();
			alert("Todo added")
		})
		}}>Add a todo</button>
	</div>

}