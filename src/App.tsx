import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Rating } from './pages/Rating';
import ReactGA from 'react-ga';


export const App = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize("UA-216959703-1");
    ReactGA.pageview(window.location.pathname);
  }
  
  return (
    <BrowserRouter>
      <Header />
      {/* <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} /> */}
      <Route path="/ratings/:slug" component={Rating} />
    </BrowserRouter>
  );
};