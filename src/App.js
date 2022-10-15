import "./App.css";
import WelcomeForm from "./components/WelcomeForm";
import FirstStep from "./components/FirstStep";
import { useState } from "react";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FinishForm from "./components/FinishForm";
import { createContext } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    formCheckRadio: "",
    formChecks: "",
    checkboxCosmetics: "",
    formCheck: "",
    checkboxCars: "",
  });
  const pageTitles = [
    "Welcome",
    "Something about you",
    "Your preferences (female)",
    "Your preferences (male)",
  ];
  const pageDisplay = () => {
    if (page === 0) {
      return <WelcomeForm />;
    } else if (page === 1) {
      return <FirstStep formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    } else {
      return <ThirdStep formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="App">
      <div className="survey-form">
        <div className="form-container">
          <div className="form-title">
            <h1>{pageTitles[page]}</h1>
            <div className="form-body">
              {pageDisplay()}
              <button
                disabled={page == 0}
                className="welcome-button"
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                prev
              </button>
              <button
                className="welcome-button"
                onClick={() => {
                  if (page === pageTitles.length - 1) {
                    alert(
                      "Your form has been submitted. Your data will help us better understand what products suit you best."
                    );
                    console.log(formData);
                  } else {
                    return setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === pageTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
