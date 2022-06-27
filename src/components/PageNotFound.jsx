import React from 'react';

class PageNotFound extends React.Component {
  componentDidMount() {
    document.title = 'PurpleTech - Página não encontrada';
  }

  render() {
    return (
      <div className="align-center">
        <h2>
          Ooops... Erro 404
          <br />
          Desculpe, mas a página que você está procurando não existe.
        </h2>
        <p className="lead text-muted">
          Por favor, verifique o endereço digitado e tente novamente ou
        </p>
        <a href="/" className="btn-default mb-3 mb-sm-0 btn">volte para a home</a>
      </div>
    );
  }
}

export default PageNotFound;
