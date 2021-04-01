import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home/index';
import { Repository } from '../pages/Repository/index';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  );
}
