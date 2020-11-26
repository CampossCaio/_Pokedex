import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePokemon from './pages/CreatePokemon';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/create-pokemon" component={CreatePokemon} />
    </Switch>
  </BrowserRouter>
  )
}