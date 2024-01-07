import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'


function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
		const respJson = await res.json();
		console.log(respJson);
		// causes infinite loop because setTodos send control to line 7
		setTodos(respJson.todos);
  })

  return (
	<div>
		<CreateTodo></CreateTodo>
		<Todo todos={todos}></Todo>
	</div>
  )
}

export default App
