import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Rating } from './pages/Rating';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} /> */}
      <Route path="/ratings/:slug" component={Rating} />
    </BrowserRouter>
  );
};