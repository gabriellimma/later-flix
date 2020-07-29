import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria() {

    

    //object that has all atributes
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',

    }

    //use state to 'add' a object
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }

    function handler(kbinput) {
      setValue( kbinput.target.getAttribute('name'),
      kbinput.target.value);
    }

    return (      
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>    

        <form onSubmit={function handleSubmit(kbinput) {
          kbinput.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);

        }}>

        <FormField
          label="Nome da categoria"
          value={values.nome}
          onChange={handler}
          name="nome"
          type="text"
        />

          
          {/* <div>
            <label>
              Descrição:
              <textarea type="text"
                value={ values.descricao }
                name="descricao"
                onChange={handler}
              />
            </label>
          </div> */}
          <>
        descricao:
        <textarea as={FormField}
          label="Descrição da categoria"
          value={values.descricao}
          onChange={handler}
          name="descricao"
          type="text"
        />
      </>
        

          {/* <div>
            <label>
              Cor:
              <input type="color"
                value={values.cor}
                name="cor"
                onChange={handler}
              />
            </label>
          </div> */}

        <FormField
          label="Cor da categoria"
          value={values.cor}
          onChange={handler}
          name="cor"
          type="color"
        />

          <button>
            cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        <Link to="/">
        Ir para home
        </Link>
      </PageDefault>
      
    )
  }

  export default CadastroCategoria;