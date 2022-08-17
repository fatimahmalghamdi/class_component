import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName= "Fatimah" lastName="Alghamdi" age={32} hairColor="Brown"/>
      <PersonCard firstName= "Razan" lastName="Buraisaly" age={30} hairColor="Black"/>
      <PersonCard firstName= "Abdulaziz" lastName="Alghamdi" age={24} hairColor="Brown"/>
      <PersonCard firstName= "Raghad" lastName="Mohammed" age={17} hairColor="Black">
      <p>I'm a good programmer</p>
      </PersonCard>
      <button onClick={ () => alert("This button has been clicked") }>Click here</button>
    </div>
  );
}

export default App;
