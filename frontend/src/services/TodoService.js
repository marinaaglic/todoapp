import axios from 'axios';

const url = '/todos';

const getTodos = () => {
    const promise = axios.get(url);
    return promise.then(response => response.data);
}

const postTodo = (todo) => {
    return axios.post(url, todo);
}

const updateTodo = (id, newTodo) => {
    return axios.put(`${url}/${id}`, newTodo);
}

const deleteTodo = (id) => {
    return axios.delete(`${url}/${id}`);
}

const requests = {
    getTodos, postTodo, updateTodo, deleteTodo
}

export default requests;