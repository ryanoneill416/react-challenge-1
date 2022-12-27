import css from './App.module.css';
import Sidebar from './components/Sidebar'
import NavBarForm from './components/NavBarForm'
import ContentHooks from './components/ContentHooks';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div>
      {/* Add your components here */}
      {/* <NavBarForm />
      <Sidebar />
      <ContentHooks /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;