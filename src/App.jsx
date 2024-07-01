import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Footer, Header } from "./components"
import { HomePage } from "./pages"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <HomePage />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  )
}

export default App
