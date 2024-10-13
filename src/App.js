import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Header from './Component/Common/Header';
import Result from './Pages/Result';

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/result' element={<Result/>} />
    </Routes>
    </>
  );
}

export default App;
