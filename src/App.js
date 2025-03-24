import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import UseStatePrimitive from './components/UseStatePrimitive';
import Event from './components/Event';


//This is a module class from javascript.This is a parent component same as app.component.
//JSX Syntax:- It's when we write the HTML like syntax/code inside function.
//Old version of react uses class based component.
//Newer version of react uses function based component.



function App() {
  return (
    <div className="App">
      <h1>Hi, from React</h1>
      <Event></Event>
    <table>
          <thead>
          <tr>
            <td> <User/> </td>
            <td><Admin></Admin> </td>
          </tr>
          </thead>
        </table>
        <UseStatePrimitive/>
      </div>
  );
}

export default App;
