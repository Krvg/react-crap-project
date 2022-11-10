import './App.css';
import Home from './Home';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Layout from './Layout';
import CountryPage from './CountryPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countrypage" element={<CountryPage />}/>
        </Route>
      </Routes>

/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */
  );
}

export default App;
