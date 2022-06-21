
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from "./pages/Calculator"
import Bmi from "./pages/Bmi"
import Header from './components/Header';
function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/whatis" element={<Bmi />}/>
      </Routes>
    </div>
  );
}

export default App;
