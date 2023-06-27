import LandingPage from "./pages/LandingPage"
import Quiz from "./pages/Quiz"
import CreateQuiz from "./pages/CreateQuiz"
import BrowseQuiz from "./pages/BrowseQuiz"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/startquiz" element={<Quiz/>}/>
        <Route path="/createquiz" element={<CreateQuiz/>}/>
        <Route path="/browse" element={<BrowseQuiz/>}/>
      </Routes>
    </Router>
  )
}

export default App