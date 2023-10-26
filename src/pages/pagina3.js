import * as React from "react"
import { useForm } from "react-hook-form";
import Layout from "../components/layout"

const Pagina3 = () => {

  const { register, handleSubmit, formState: { errors }} = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const onSubmit = dados => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form_react_form", ...dados })
    }).then(() => {
      alert("Em breve daremos um retorno do seu contato. Obrigado!");      
    }).catch(error => alert(error));
    console.log(encode({ "form-name": "form_react_form", ...dados }));
  };

  return (
    <Layout>
      <h2>Entre em Contato:</h2>
      <div className="container">
        <form name="form_react" method="post" onSubmit={handleSubmit(onSubmit)}
          data-netlify="true" data-netlify-honeypot="bot-field">

          <input type="hidden" name="form-name" value="form_estatico" />
          <label>
            Nome
            <input type="text" name="nome" {...register("nome", { required: true, maxLength: 20 })} />
            {errors.nome && errors.nome.type === "required" && (
              <span>&nbsp;Nome é obrigatório.</span>
            )}
            {errors.nome && errors.nome.type === "maxLength" && (
              <span>&nbsp;Nome pode ter 20 caracteres no máximo.</span>
            )}
          </label>
          <label>
            Email
            <input type="email" name="email" {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} />
            {errors.email && errors.email.type === "required" && (
              <span>&nbsp;Email é obrigatório.</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span>&nbsp;Email inválido.</span>
            )}
          </label>
          <label>
            Assunto
            <input type="text" name="assunto" {...register("assunto", { required: true, maxLength: 100 })} />
            {errors.nome && errors.nome.type === "maxLength" && (
              <span>&nbsp;Nome pode ter 100 caracteres no máximo.</span>
            )}
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" {...register("mensagem")} />
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    </Layout>
  )
}

export default Pagina3

export const Head = () => <title>Formulário React Form</title>
