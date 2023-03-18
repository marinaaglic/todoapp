require('dotenv').config();

const PORT = process.env.PORT;

const password = process.env.ATLAS_PASS;
const dbname = process.env.NODE_ENV === 'test'
    ? 'todo-api-test'
    : 'todo-api';

const url = `mongodb+srv://oarwa-mac:${password}@cluster0.g8ypj4h.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = { PORT, url };