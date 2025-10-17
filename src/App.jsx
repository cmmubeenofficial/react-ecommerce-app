import HomePage from "./pages/HomePage/HomePage"
import SignUp from "./pages/SignUp/SignUp"
import toast, { Toaster } from "react-hot-toast"

function App() {

  // check wheather user is loggedin or not
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {isLoggedIn ? <HomePage /> : <SignUp />}
      <Toaster position="top-right" />
    </>
  )
}

export default App
