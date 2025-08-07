import Banner from '../componentes/Banner';
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
function Sobre() {
  return (
    <div className="pagina">
      <NavBar />
      <Banner />
    <h1>O Futuro da Inteligência Artificial</h1>
    <p>A IA está em constante evolução. Espera-se que ela assuma papéis ainda mais complexos, colaborando com humanos em decisões importantes.</p>
    <p>Desafios como ética, privacidade e impacto no emprego também estão em discussão, exigindo atenção da sociedade.</p>
    <p>Com responsabilidade e inovação, o futuro da IA pode ser promissor e transformador.</p>
    <Footer/>
  </div>

  );
}

export default Sobre;
