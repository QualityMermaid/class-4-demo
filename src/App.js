import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [formData, setFormData] = useState({
    name:"",
    dob:""
  });

  function handleFormData(event){
    // console.log(event.target.value)
    // console.log(event.target.name)
    // console.log("form changed")
    // [event.target.name] is used as a prop as the event.target.value is a string
    setFormData({...formData, [event.target.name]:event.target.value})
    // console.log(typeof(event.target.value))
    console.log(formData)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    console.log(formData)
  }


  return (
    <div className="App">
      <Header/>

    <form onSubmit={handleFormSubmit}>
      <legend>  </legend>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' placeholder='enter your name' onChange={handleFormData}></input>
      <label htmlFor='dob'> Date of birth:</label>
      <input type='date' id='dob' name='dob' onChange={handleFormData}></input>
      <button type='submit'>Submit</button>
    </form>
    </div>
  );
}

export default App;
