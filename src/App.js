import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <HashRouter basename='/'>
        <Routes>
          <Route path="/" element={<TaskList />}/>
          <Route path="/create-task" element={<TaskForm />}/>
          <Route path="/edit-task/:id" element={<TaskForm />} />

        </Routes>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
