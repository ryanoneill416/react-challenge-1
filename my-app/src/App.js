import css from './App.module.css';
import Sidebar from './components/Sidebar'
import NavBarForm from './components/NavBarForm'
import Content from './components/Content';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarForm />
      <Sidebar />
      <Content /> */}
      <ControlledFormHooks />
    </div>
  );
}

export default App;