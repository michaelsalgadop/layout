function App() {
  const textoCabecera = "Título";
  const titularNoticia = "Titular de la noticia";
  const cuerpoNoticia =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Verorepellendus esse odio laboriosam dolores eius, est velit inventore repudiandae, non veritatis corrupti nihil aliquid quidem quo voluptas sit. Harum, quia.";
  const tituloCategorias = "Categorías";
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectáculos",
  ];
  const otrasCosas = ["Nosequé", "Nosecuántos", "Talycual"];
  const copyright = true;
  return (
    <div className="contenedor container">
      <header className="row align-items-center">
        <h1 className="col m-0">{textoCabecera}</h1>
      </header>
      <div className="contenedor row">
        <main className="col-12 col-sm-7 col-md-8 py-4">
          <h2>{titularNoticia}</h2>
          <p>{cuerpoNoticia}</p>
          <p>{cuerpoNoticia}</p>
        </main>
        <aside className="col-12 col-sm-5 col-md-4 py-4">
          <h2>{tituloCategorias}</h2>
          <ul className="list-unstyled">
            {categorias.map((categoria) => (
              <li key={categoria}>{categoria}</li>
            ))}
          </ul>
          <h2>Otras cosas</h2>
          <ul className="list-unstyled">
            {otrasCosas.map((otraCosa) => (
              <li key={otraCosa}>{otraCosa}</li>
            ))}
          </ul>
        </aside>
      </div>
      <footer className="row align-items-center">
        <p className="col text-center">
          Texto del footer
          {copyright && (
            <span> - Ningún derecho reservado, copia lo que quieras</span>
          )}
        </p>
      </footer>
    </div>
  );
}

export default App;
