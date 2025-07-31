import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} João Victor de Souza. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="https://github.com/JoaoVictorDeSouza" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-de-souza-55827b220/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="73joao.victor@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
      </div>
    </footer>
  )
}
