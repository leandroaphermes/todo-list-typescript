import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  display: block;
  border: none;
  box-shadow: 0px 0px 1px 1px #888;
`;

export const ButtonAdd = styled.button`
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #2a2f64;
  color: #FFF;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover{
    background-color: #3a3f94;
  }
`;
