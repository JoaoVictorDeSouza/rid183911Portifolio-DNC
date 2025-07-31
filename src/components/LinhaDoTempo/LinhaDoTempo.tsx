import './Sobre.css'
import { LinhaDoTempoItem } from './LinhaDoTempoItem'

export function LinhaDoTempo() {
  return (
    <section className="sobre" id="sobre">
      <h2>Sobre mim</h2>
      <div className="linha-do-tempo">
        <LinhaDoTempoItem
          ano="2018"
          titulo="Início nos estudos"
          descricao="Comecei a estudar Analise e desenvolvimento de Sistemas."
        />
        
        <LinhaDoTempoItem
          ano="2022"
          titulo="Interesse em Front-End"
          descricao="Criei meus primeiros projetos com HTML, CSS, JS e depois migrei para React. Onde continuo a me Aperfeiçoar"
        />

        <LinhaDoTempoItem
          ano="2025"
          titulo="Em busca de oportunidades"
          descricao="Estou construindo meu portfólio para atuar profissionalmente como dev."
        />
      </div>
    </section>
  )
}
