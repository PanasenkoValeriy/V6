import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};
