import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn/signInPage";
import SignUpPage from "./pages/signUp/signUpPage";
import TimelinePage from "./pages/timeline/timeline";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/timeline" element={<TimelinePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
