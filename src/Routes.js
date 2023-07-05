import { Switch, Route } from 'react-router-dom';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact />
      <Route path="/new" />
      <Route path="/edit/:id" />
    </Switch>
  );
}