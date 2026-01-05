import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import SignIn from "./pages/signin";

function App() {
  return (
    <BrowserRouter basename="/dio-clone">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
     </Routes >
    </BrowserRouter>
  );
}

export default App;
