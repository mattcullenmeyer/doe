import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
    </BrowserRouter>
  );
};