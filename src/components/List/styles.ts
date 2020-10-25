import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
  background-color: #FAFAFA;
  color: #333;
  padding: 15px;
  border-radius: 3px;
`;


export const ContainerRows = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
interface IContainerItem {
  last?: boolean
}

export const ContainerItem = styled.div<IContainerItem>`
  padding: 10px 0px;
  ${ props => !props.last ? `border-bottom: 1px solid rgba(0,0,0,0.1);` : null}
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0,0,0,0.2)
  }
`