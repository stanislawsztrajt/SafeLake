import { Route, Routes } from "react-router";
import Home from './pages/home';
import LevelsHack from './pages/levels-hack/[levels-hack-id]/levels-hack';
import LevelsMessage from './pages/levels-message';
import LevelPhone from './pages/[level-phone-id]/level-phone';
import LevelsPhone from "./pages/levels-phone";
import HackSumarry from "./pages/levels-hack/hack-summary";
import HackIntro from "./pages/levels-hack/hack-intro";
import LevelMessage from "./pages/[level-message-id]/level-message";
import LevelsMessageTutorial from "./pages/levels-message-tutorial";
import LevelsPhoneTutorial from "./pages/levels-phone-tutorial";

function App() {
  return (
    <Routes>
      <Route index Component={Home}></Route>
      <Route path='level-hack-intro' Component={HackIntro}></Route>
      <Route path='level-hack/:levels_hack_id' Component={LevelsHack}></Route>
      <Route path='level-hack-summary' Component={HackSumarry}></Route>
      <Route path='levels-message' Component={LevelsMessage}></Route>
      <Route path='level-message/:level_message_id' Component={LevelMessage}></Route>
      <Route path='levels-phone' Component={LevelsPhone}></Route>
      <Route path='level-phone/:level_phone_id' Component={LevelPhone}></Route>
      <Route path='levels-message-tutorial' Component={LevelsMessageTutorial}></Route>
      <Route path='levels-phone-tutorial' Component={LevelsPhoneTutorial}></Route>
    </Routes>
  )
}

export default App
