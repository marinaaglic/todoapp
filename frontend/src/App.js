import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }
  const hideFormHandler = () => {
    setShowForm(false);
  }
  return (
    <div className="App">
      <Header onCreateTodo={showFormHandler} />
      <Todos onHide={hideFormHandler} onShow={showForm} />
    </div>
  );
}

export default App;
