import { Projetos } from './pages/Projetos'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { LinhaDoTempo } from './components/LinhaDoTempo/LinhaDoTempo'
import { Footer } from './components/Footer/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton/ScrollToTopButton'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projetos />
     <LinhaDoTempo />
     <Footer />
     <ScrollToTopButton />
    </>
  )
}

export default App