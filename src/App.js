import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Table from './component/Table'

function App() {

  return (
    <div className="App">
      <Header />
      <h1> Flight List</h1>

      <div className="row-data">
        <div><label >Going From:</label>
          <select>
            <option selected value="">Enter the City</option>
            <option value="" >Islamabad</option>
            <option value="">Karachi</option>
            <option value="">Lahore</option>
            <option value="">Multan</option>
            <option value="">Bahawalpur</option>
          </select>
        </div>

        <div><label >Going To:</label>
          <select>
            <option selected value="">Enter the City</option>
            <option value="">Islamabad</option>
            <option value="">Karachi</option>
            <option value="">Lahore</option>
            <option value="">Multan</option>
            <option value="">Bahawalpur</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Date:</label>
          <input type="date" />
        </div>
        <button className="btn btn-primary" onclick={onclick} >Sumit</button>
        <button className="btn btn-gray" >Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
      <Table />
    </div>
  );
}

export default App;
