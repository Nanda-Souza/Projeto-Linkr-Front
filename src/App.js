import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import SignInPage from "./pages/signIn/signInPage";
import SignUpPage from "./pages/signUp/signUpPage";
import TimelinePage from "./pages/timeline/timeline";
import HashtagPage from "./pages/hashtag/hashtag";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />}></Route>
            <Route path="/sign-up" element={<SignUpPage />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
            <Route path="/hashtag" element={<HashtagPage />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
