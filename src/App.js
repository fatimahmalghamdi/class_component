import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';

function App() {
  const [personList , setPersonList] = React.useState(
    [
      {id: 1, firstName: "Fatimah", lastName: "Mohammed", age: 10, hairColor: "Brown"},
      {id: 2, firstName: "Razan", lastName: "Yahya", age: 20, hairColor: "Black"}
    ]
  )

  function whenclick(id){
    setPersonList(personList.map(p => p.id == id ? {...p, age: p.age+1} : p));
  }

  return (
    <div className="App">
    {personList.map((person) => <PersonCard key={person.id}
        person={person}
        whenclick={whenclick}
      />
    )}
    </div>
  );
}

export default App;
