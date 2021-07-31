import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={(props) => <Homepage {...props} />} />

        </Switch>
      </BrowserRouter>
  )     ;
};
export default App;