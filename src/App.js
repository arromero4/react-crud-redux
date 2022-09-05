import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <Router basename='/'>
        <Routes>
          <Route path="/react-crud-redux/" element={<TaskList />}/>
          <Route path="/react-crud-redux/create-task" element={<TaskForm />}/>
          <Route path="/react-crud-redux/edit-task/:id" element={<TaskForm />} />

        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
