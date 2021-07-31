import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import Homebar from './homebar';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
      <div className="App">
          <Homebar />
          <UserForm />
      </div>
  )     ;
};
export default App;