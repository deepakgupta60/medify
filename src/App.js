import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Header from './Component/Common/Header';
import Result from './Pages/Result';
import Confirmed from './Pages/Confirmed';
import Test from './Test';

function App() {
  
  return (
    <>




    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/result' element={<Result/>} />
      <Route path='/confirmation' element={<Confirmed/>} />
      <Route path='/test' element={<Test/>}/>
    </Routes>
    </>
  );
}

export default App;
