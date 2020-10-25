import React,{ useState } from 'react'
import AddItem from '../AddItem/AddItem'

import { Container, ContainerRows, ContainerItem } from './styles'

import IList from '../../interfaces/IList'

export default function List() {

  const [list, setList] = useState<IList[]>([])

  function handleOnAddItem(value: string){
    setList([...list, { id: new Date().getTime(), value: value } ])
  }

  return (
    <Container>
      <AddItem onAddItem={handleOnAddItem} />
      <ContainerRows>
        { list.length > 0 ? (
          list.map( (item, index) => (
            <ContainerItem key={item.id} last={list.length === (index+1)}>
              {item.value}
            </ContainerItem>
          ))
        ) : (
          <span>Não ha dados</span>
        )}
      </ContainerRows>
    </Container>
  )
}
