const express =require("express")
const router = express.Router()
const Todo=require("../models/Todo")
const todo=require("../controllers/todo")

router.get("/",todo.homeController );
// add todo page
router.get("/add-todo", todo.addTodoFormController);
// update todo page
router.get("/update-todo", todo.updateTodoFormController);
// delete todo
router.get("/delete-todo",todo.deleteTodoPageController)

router.post("/add-todo",todo.addTodoController)

router.post("/update-todo/:id",todo.updateTodoController)

router.get("/confirm-delete",todo.deleteTodoController)

module.exports=router;