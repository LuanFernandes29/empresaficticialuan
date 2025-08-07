import Banner from '../componentes/Banner';
import NavBar from '../componentes/NavBar';
import './Home.css';
function Home() {
  return (
    <div className="pagina">
      <NavBar />
      <Banner />
      <h1>Aplicações da Inteligência Artificial</h1>
      <ul>
        <li><strong>Saúde:</strong> Diagnóstico de doenças, análise de exames e medicina personalizada.</li>
        <li><strong>Transporte:</strong> Carros autônomos, otimização de rotas e logística inteligente.</li>
        <li><strong>Segurança:</strong> Reconhecimento facial e análise de padrões suspeitos.</li>
        <li><strong>Educação:</strong> Plataformas adaptativas e tutores inteligentes.</li>
        <li><strong>Entretenimento:</strong> Recomendação de músicas, filmes e criação de conteúdo por IA.</li>
      </ul>

    </div>
  );
}

export default Home;
