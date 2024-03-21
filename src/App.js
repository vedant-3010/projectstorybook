import logo from './logo.svg';
import './App.css';
import Toast from './stories/Toast';

function App() {
  return (
    <div className='toast-container'>
      <Toast 
        iconContainer={false}
        message="Message here"
        divider={true}
        actionButton={true}
        onClose={true}
      />
    </div>
  );
}

export default App;
