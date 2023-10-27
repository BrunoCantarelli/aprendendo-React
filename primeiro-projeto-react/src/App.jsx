import { useRef, useState } from "react";
import { v4 } from "uuid"; // para gerar chaves aleatorias

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function btn() {
    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value,
      },
      ...produtos,
    ]); // ...produtos é para que todos as coisas ja digitadas permaneçam ali
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <button onClick={btn}>Adicionar</button>

      {produtos.map((produto) => (
        <div key={v4()}>{produto}</div>
      ))}
    </div>
  );
}

export default App;
