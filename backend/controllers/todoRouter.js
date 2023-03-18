const todoRouter = require('express').Router();
const todoModel = require('../models/todoModel');

todoRouter.get('/', (req, res) => {
    todoModel.find({}).then(result => {
        res.json(result);
    })
});

todoRouter.post('/', (req, res, next) => {
    const data = req.body;
    const todo = new todoModel({
        title: data.title,
        description: data.description,
        done: data.done
    })
    todo.save().then(result => {
        res.json(result);
    }).catch(error => next(error));
});

todoRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    const todo = {
        title: data.title,
        description: data.description,
        done: data.done
    }
    todoModel.findByIdAndUpdate(id, todo, { new: true }).then(todo => {
        res.json(todo);
    }).catch(error => next(error));
});

todoRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    todoModel.findByIdAndRemove(id).then(result => {
        res.status(204).end()
    }).catch(error => next(error))
});

module.exports = todoRouter;