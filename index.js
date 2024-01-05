const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json)


// body {
//		title: string
//		description: string
//	}
app.post('/todo', function(req, res){
	const createPayload = req.body;
	const parsedPayload = createTodo.safeParse(createPayload);
	if(!parsedPayload.success){
		res.status(411).json({
			"msg" : "invalid input"
		})
		return;
	}
	// put it in mongo db
})


app.get('/todos', function(req, res){

})

app.put('/completed', function(req, res){
	const updateId = req.body;
	const parsedId = updateTodo.safeParse(updateId);
	if(!parsedId.success){
		res.status(411).json({
			"msg" : "invalid input"
		})
		return;
	}
	// update it in mongo db
})