import './App.css'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import LevelsHack from './pages/levels-hack';
import LevelsMessage from './pages/levels-message';
import LevelsPhone from './pages/levels-phone';

function App() {
  return (
    <Routes>
      <Route index Component={Home}></Route>
      <Route path='levels-hack' Component={LevelsHack}></Route>
      <Route path='levels-message' Component={LevelsMessage}></Route>
      <Route path='levels-phone' Component={LevelsPhone}></Route>
    </Routes>
  )
}

export default App
