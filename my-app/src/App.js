import './App.css';
import Header from "./Header"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

function App() {
  return (
    <div className="App">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
