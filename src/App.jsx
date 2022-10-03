import { CountryProvider } from "./context/CountryContext";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <CountryProvider>
      <div className='bg-lightModeBg text-lightModeText dark:text-lightModeElements dark:bg-darkModeBg  min-h-screen font-nunito'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<CountryDetail />} />
        </Routes>
      </div>
    </CountryProvider>
  );
}

export default App;
