import { Route, Routes } from "react-router";
import Home from './pages/home';
import LevelsHack from './pages/levels-hack/[levels-hack-id]/levels-hack';
import LevelsMessage from './pages/levels-message';
import LevelPhone from './pages/[level-phone-id]/level-phone';
import LevelsPhone from "./pages/levels-phone";
import HackSumarry from "./pages/levels-hack/hack-summary";
import HackIntro from "./pages/levels-hack/hack-intro";

function App() {
  return (
    <Routes>
      <Route index Component={Home}></Route>
      <Route path='level-hack-intro' Component={HackIntro}></Route>
      <Route path='level-hack/:levels_hack_id' Component={LevelsHack}></Route>
      <Route path='level-hack-summary' Component={HackSumarry}></Route>
      <Route path='levels-message' Component={LevelsMessage}></Route>
      <Route path='level-phone/:level_phone_id' Component={LevelPhone}></Route>
      <Route path='levels-phone' Component={LevelsPhone}></Route>
    </Routes>
  )
}

export default App
