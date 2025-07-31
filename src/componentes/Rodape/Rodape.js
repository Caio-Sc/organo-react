import "./Rodape.css";

export const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <a
            href="https://github.com/Caio-Sc"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img id="gitlogo" src="./imagens/github.svg" alt="Logo da Github" />
        </a>
      </section>
      <section>
        <img src="./imagens/logo.png" alt="Logo do Organo" />
      </section>
      <section>
        <p>Desenvolvido por Caio Sclavi</p>
      </section>
    </footer>
  );
};
