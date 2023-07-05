import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NewContact } from './pages/new-contact/NewContact';
import { Edit } from './pages/edit-contact/Edit';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact}/>
      <Route path="/edit/:id" component={Edit}/>
    </Switch>
  );
}
