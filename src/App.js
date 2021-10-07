import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import DisplayBreeds from './components/DisplayBreeds/DisplayBreeds';
import Breeds from './components/DisplayBreeds/Breeds';
import Header from './components/Header.js/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>

        <Switch>

          <Route path="/" exact component={DisplayBreeds} />
          <Route path="/:breedName/images" exact component={Breeds} />
          <Route>404 Not Found</Route>



        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
