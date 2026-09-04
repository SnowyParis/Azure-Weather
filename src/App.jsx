import { Routes, Route } from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Settings from "./pages/Settings.jsx";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen pb-20">
        <main className="mx-auto w-[calc(100%-24px)] max-w-5xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>    
      </div>

      <footer className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Azure Weather. Update your day.
      </footer>

      <BackToTop />
    </>
  );
}

export default App;
