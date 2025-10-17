import HomePage from "./pages/HomePage/HomePage"
import SignUp from "./pages/SignUp/SignUp"
import toast, { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <SignUp />
      {/* <HomePage /> */}
      <Toaster position="top-right" />
    </>
  )
}

export default App
