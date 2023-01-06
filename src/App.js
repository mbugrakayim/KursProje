import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BilgiYarismasi from "./Component/Game/Yarisma/BilgiYarismasi";
import Home from "./Component/Home/Home";
import Footer from "./Component/Navi/Footer";
import Film from "./Component/Film/Film";
import Navi from "./Component/Navi/Navi";
import CustomerLogin from "./Component/Register/CustomerLogin";
import CustomerRegister from "./Component/Register/CustomerRegister";
import Astroloji from "./Component/Horoscope/Astroloji";




function App() {
  const [loading, setLoading] = useState(true);
  const load = document.getElementById("loading");
  if (load) {
    setTimeout(() => {
      load.style.display = "none";
      setLoading(false);
    }, 2000)
  }

  return (
    !loading && (
      <div>
        
        <Router>
          <Navi />
          <Routes>
            <Route path="/bilgiyarismasi" element={<BilgiYarismasi />} />
            <Route path="/movies" element={<Film />} />

            <Route path="/horoscope" element={<Astroloji />} />
            {/* <Route path="/register" element={<CustomerRegister />} />
          <Route path="/login" element={<CustomerLogin />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  );
}

export default App;
