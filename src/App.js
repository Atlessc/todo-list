import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewToDo from './components/AddNewToDos';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import ToDos from './components/ToDos';
import EditToDos from './components/EditTodos';

function App() {
  return (
    <div className='App'>
      <Sidebar>
        <User />
        <AddNewToDo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <ToDos />
        <EditToDos />
      </Main>

    </div>
  );
}

export default App;
