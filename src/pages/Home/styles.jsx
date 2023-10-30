import styled from 'styled-components'

export const Container = styled.div`
  background-color: #b752ff;
  padding: 30px;
  border-radius: 20px;

  h1 {
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }
`

export const AddButton = styled.button`
  background-color: #6cf000;
  color: #000;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  &:hover {
    opacity: 0.8;
  }
`

export const Products = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 10px;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;

  p {
    text-transform: capitalize; // primeiras letras sempre maiusculas
    font-weight: bold; // negrito
  }
`


export const RemoveButton = styled.button`
  cursor: pointer;
  padding: 3px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }

`