import './App.css';
import Home from './Home';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Layout from './Layout';
import CountryPage from './CountryPage';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countrypage/:name" element={<CountryPage />}/>
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
