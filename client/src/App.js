import './components/style/App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className='App'>
      <div className='container' style={{ paddingLeft: '0px' }}>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
