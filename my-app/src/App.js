import css from './App.module.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm'

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;