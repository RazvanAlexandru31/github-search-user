import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import Footer from "./componets/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./context/GithubContext";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./componets/Alert/Alert";
import User from "./Pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-4 pb-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path='/user/:login' element={<User></User>}></Route>
                <Route path="/*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
