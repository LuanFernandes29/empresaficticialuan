import Banner from '../componentes/Banner';
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import './Sobre.css'; // <- Importa o novo CSS

function Sobre() {
  return (
    <div>
      <NavBar />
      <Banner />
      
      <main className="sobre-container">
        <h1>O Futuro da Inteligência Artificial</h1>
        
        <p>
          A Inteligência Artificial está em constante evolução. Espera-se que ela assuma papéis ainda mais complexos,
          colaborando com humanos em decisões importantes, desde diagnósticos médicos até sistemas judiciais.
        </p>

        <p>
          Contudo, desafios como ética, privacidade, viés algorítmico e impacto no emprego estão em pauta, exigindo atenção da sociedade
          para garantir uma IA justa, segura e inclusiva.
        </p>

        <p>
          Com responsabilidade e inovação, o futuro da IA pode ser promissor e profundamente transformador para todos os setores da vida humana.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Sobre;
