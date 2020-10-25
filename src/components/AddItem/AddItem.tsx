import React,{ useState, useRef, useEffect } from 'react'

import { Container, Input, ButtonAdd } from './styles'

interface IAddItem {
  onAddItem(value: string): void
}

const AddItem: React.FC<IAddItem> = ({ onAddItem }) => {

  const inputRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState<string>("")

  function handleInput(value: string){
    setInput(value)
  }

  function handleOnAdd(): void {
    if(input  === " " || !input) return 
    onAddItem(input)
    setInput("")
    inputRef.current?.focus()
  }

  function handlePressEnter(key: string){
    if(key.toUpperCase() === 'ENTER') handleOnAdd()
  }

  useEffect( () => {
    inputRef.current?.focus()
  }, [])

  return (
    <Container>
      <Input 
        type="text" 
        ref={inputRef} 
        value={input} 
        onChange={ e => handleInput(e.target.value)} 
        onKeyUp={ e => handlePressEnter(e.key)}
      />
      <ButtonAdd onClick={handleOnAdd} >Adicionar</ButtonAdd>
    </Container>
  )
}

export default AddItem