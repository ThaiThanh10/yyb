import { useState } from "react"
import "./App.css"
import { Footer, Header } from "./components"
import { HomePage } from "./pages"

function App() {

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
