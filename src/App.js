import './App.css';
import "./Resources/style.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Header from './Components/Header/Header';
import AskQuestion from './Components/AskQuestion/AskQuestion';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Answer from './Components/Answer/Answer';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/ask"
            element={
              <>
                <Header />
                <AskQuestion />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/answer"
            element={
              <>
                <Header />
                <Answer />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
