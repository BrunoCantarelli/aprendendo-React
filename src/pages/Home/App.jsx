import { useRef, useState } from "react";
import { v4 } from "uuid"; // para gerar chaves aleatorias
import { AddButton, Container, Products, RemoveButton } from './styles' //css

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function btnAdd() {
    setProdutos([{id: v4(), nome: inputRef.current.value,},...produtos,]); // ...produtos é para que todos as coisas ja digitadas permaneçam na tela
    inputRef.current.value = '' // para limpar o input
  }

  function removeElement(id) {
    console.log(id)
    setProdutos(produtos.filter(produto => produto.id !== id))// pega produto por produto e ve se o produto tem o id que foi clicado, se sim, ele apaga
  }

  return (
    <>
      <Container>
        <h1>Lista de Compras</h1>
          <input placeholder="produto..." ref={inputRef} />
          <AddButton onClick={btnAdd}>Adicionar</AddButton>        
            {produtos.map((produto) => (
          <Products key={produto.id}>
            <p>{produto.nome}</p>
            <RemoveButton onClick={() => removeElement(produto.id)}>🗑️</RemoveButton>
          </Products>
        ))}
      </Container>
    </>
  );
}

export default App;
