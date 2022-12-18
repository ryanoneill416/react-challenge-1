import css from './App.module.css';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <RenderingLists />
    </div>
  );
}

export default App;