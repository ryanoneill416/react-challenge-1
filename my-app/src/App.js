import css from './App.module.css';
import Sidebar from './components/Sidebar'
import NavBarForm from './components/NavBarForm'
import Content from './components/Content';
import UseStateWithObjects from './components/UseStateWithObjects';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarForm />
      <Sidebar />
      <Content /> */}
      <UseStateWithObjects />
    </div>
  );
}

export default App;