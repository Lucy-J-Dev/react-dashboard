import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./ui/Main";
import ContentPage from "./pages/ContentPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterAppPage from "./pages/CounterAppPage";
import TodoAppPage from "./pages/TodoAppPage";
import CalculatorAppPage from "./pages/CalculatorAppPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`${darkMode && "dark"} font-quickSand h-screen flex`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Main>
          <Routes>
            <Route path="/" element={<ContentPage />} />
            <Route path="/counter" element={<CounterAppPage />} />
            <Route path="/todo" element={<TodoAppPage />} />
            <Route path="/calculator" element={<CalculatorAppPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
};

export default App;
