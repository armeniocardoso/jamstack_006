import * as React from "react"
import { useState } from "react";
import Layout from "../components/layout"

const Pagina2 = () => {

  const [inputs, setInputs] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form_react", ...inputs })
    }).then(() => {
      alert("Em breve daremos um retorno do seu contato. Obrigado!");
      setInputs({ nome: "", email: "", assunto: "", mensagem: "" });
    }).catch(error => alert(error));
  };

  return (
    <Layout>
      <h2>Entre em Contato:</h2>
      <div className="container">
        <form method="post" onSubmit={handleSubmit}
          data-netlify="true" data-netlify-honeypot="bot-field">
          <label>
            Nome
            <input type="text" name="nome" value={inputs.nome} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={inputs.email} onChange={handleChange} />
          </label>
          <label>
            Assunto
            <input type="text" name="assunto" value={inputs.assunto} onChange={handleChange} />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" value={inputs.mensagem} onChange={handleChange} />
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    </Layout>
  )
}

export default Pagina2

export const Head = () => <title>Formulário React</title>
