import Cursor from "./components/cursor"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import './index.css'



function App() {

  return (
    <main className="text-zinc-950">
      <Cursor />

      <header>
        <Header />
      </header>

      <section>
        <Projects />
      </section>

      <Footer />
    </main>
  )
}

export default App
