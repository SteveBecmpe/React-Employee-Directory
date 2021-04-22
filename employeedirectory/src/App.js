import Header from './components/Header';
import './App.css';
import EmployeeContent from './components/EmployeeContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <EmployeeContent/>
     
      </div>
     
    </div>
  );
}

export default App;
