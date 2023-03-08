import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import { RQSuperheroPage } from './components/RQSuperheroPage';
import { SuperheroPage } from './components/SuperheroPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='//super-heroes' element={<SuperheroPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperheroPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
