import { ProjetoCard } from '../components/ProjetoCard/ProjetoCard'
import '../components/ProjetoCard/Projetos.css'

export function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <ProjetoCard
          titulo="Loja Motor Death"
          descricao="Meu primeiro projeto desenvolvido em Java"
          link="https://github.com/JoaoVictorDeSouza/loja-de-veiculos"
        />
        <ProjetoCard
          titulo="Projeto de apresentação da série The Last of Us"
          descricao="Primeiro projeto feito em HTML, CSS e JS"
          link="https://github.com/JoaoVictorDeSouza/projeto-the-last-of-us"
        />
        <ProjetoCard
          titulo="Dashboard de vendas"
          descricao="Projeto proposto pela escola DNC "
          link="https://github.com/JoaoVictorDeSouza/Gerenciador-De-Tarefas-DNC"
        />
        <ProjetoCard
          titulo="Arquitetura - Projeto Loja de arquitetura"
          descricao="Projeto desenvolvida para aperfeiçoar minhas habilidades."
          link="https://github.com/JoaoVictorDeSouza/Projeto-Arquitetura"
        />
      </div>
    </section>
  )
}
