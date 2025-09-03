import { useState } from 'react'
import './App.css'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className = "link-card">
            <div className="card">
              <img src={p3} alt="" className="img-card" />
              <h2 className="titulo-card">Persona 3 Reload</h2>
              <p className="desc">Jogo do persona 3 muito incrível, vale a pena, jogue</p>
              <p className="preco">R$ 349,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 10%</div>
            </div>
          </a>
          {/* Produto 2 */}
          <a href="#" className = "link-card">
            <div className="card">
              <img src={p4} alt="" className="img-card" />
              <h2 className="titulo-card">Persona 4 Golden</h2>
              <p className="desc">Persona foda, jogar é uma boa idéia, compra</p>
              <p className="preco">R$ 99,90</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 10%</div>
            </div>
          </a>
          {/* Produto 3 */}
          <a href="#" className = "link-card">
            <div className="card">
              <img src={p5} alt="" className="img-card" />
              <h2 className="titulo-card">Persona 5 Royal</h2>
              <p className="desc">Um jogo muito foda, joga aí man, vale muito a pena</p>
              <p className="preco">R$ 249,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ★</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">

        <iframe src="https://www.youtube-nocookie.com/embed/tvDyyiivXuQ?si=R-Qa8TrpeKL_q21U" frameborder="0" allow="autoplay; fullscreen"></iframe>

</section>
<footer>
  <img src="" alt="" className ="logo-footer"/>
 <div className="social-icons">
  <div className="instagram"><img src="" alt="" /></div>
  <div className="discord"><img src="" alt="" /></div>
  <div className="X"><img src="" alt="" /></div>
  <div className="youtube"><img src="" alt="" /></div>
 </div>
</footer>
</main>
</>
)
}

export default App