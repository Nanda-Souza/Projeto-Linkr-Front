import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn/signInPage";
import SignUpPage from "./pages/signUp/signUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
