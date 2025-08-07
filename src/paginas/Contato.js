import NavBar from "../componentes/NavBar";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import { useState } from "react";
import './Contato.css';

const Contato = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviar = () =>{
        alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso.');
        setNome('');
        setEmail('');
        setMensagem('');
    }

    return(
        <div>
            <NavBar />
            <Banner />
            <h1>Bem-vindo à nossa página de Contato!</h1>
            <p className="textoContato">Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco através do formulário abaixo:</p>
            <form className="formContato" onSubmit={enviar}>
                <input type="text" id="nome" placeholder="Seu nome aqui*" value={nome} onChange={(e) => {setNome(e.target.value)}} required />
                
                <input type="text" id="email" placeholder="Seu e-mail aqui*" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                
                <textarea id="mensagem"  placeholder="Sua mensagem aqui*" value={mensagem} onChange={(e) => {setMensagem (e.target.value)}} required ></textarea>
                
                <button className="botaoContato" type="submit">Enviar</button>
            </form>
            <Footer />
        </div>
    )
}

export default Contato;