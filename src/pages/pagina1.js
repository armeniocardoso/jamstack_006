import * as React from "react"
import Layout from "../components/layout"

const Pagina1 = () => {
  return (
    <Layout>
      <h2>Entre em Contato:</h2>
      <div className="container">
        <form name="form_estatico" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="form_estatico" />
          <label>
            Nome
            <input type="text" name="nome" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Assunto
            <input type="text" name="assunto" />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" />
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    </Layout>
  )
}

export default Pagina1

export const Head = () => <title>Formulário Estático</title>
