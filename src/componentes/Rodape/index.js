import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                {/* <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
</li> */}
                <li>
                    <a href="https://www.twitter.com/deivid_esf" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/deivid_esf" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img className='logo-rodape' src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p className='nome-rodape'>
                Desenvolvido por <a href='https://www.linkedin.com/in/deivid-esf/'>Deivid Esteferson</a>.
            </p>
        </section>
    </footer>)
}

export default Rodape