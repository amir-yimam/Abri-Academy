import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import  Home from './Pages/Home.jsx'
import Notes from './Pages/Notes.jsx'
import Leaderboard from './Pages/Leaderboard.jsx'
import Exams from './Pages/Exams.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/leaderboard" element={<Leaderboard/>}/>
                <Route path="/exams" element={<Exams/>}/>

            </Routes>
        </Router>
    );
}

export default App;