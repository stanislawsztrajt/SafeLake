import { Route, Routes } from "react-router";
import Home from './pages/home';
import LevelsHack from './pages/[levels-hack-id]/levels-hack';
import LevelsMessage from './pages/levels-message';
import LevelsPhone from './pages/[levels-phone-id]/levels-phone';

function App() {
  return (
    <Routes>
      <Route index Component={Home}></Route>
      <Route path='levels-hack/:levels_hack_id' Component={LevelsHack}></Route>
      <Route path='levels-message' Component={LevelsMessage}></Route>
      <Route path='levels-phone/:levels_phone_id' Component={LevelsPhone}></Route>
    </Routes>
  )
}

export default App
