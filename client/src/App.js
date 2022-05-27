import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Create from './views/Create';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <BrowserRouter >
      <div className="container mt-5 bg-secondary p-3">
        <h1>How to LOL</h1>

        <Routes>
          <Route path="" element={<Search />} />
          <Route path="/champions/:id" element={<Dashboard />} />
          <Route path='/new/:id' element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
