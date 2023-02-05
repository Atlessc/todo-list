import './App.css';
import Header from './components/Header';
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
      <Header>
        <User />
        <AddNewToDo />
        <Calendar />
        <Projects />
      </Header>
      <Main>
        <ToDos />
        <EditToDos />
      </Main>

    </div>
  );
}

export default App;
