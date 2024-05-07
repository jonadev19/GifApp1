import { useState } from "react"

 
export const AddCategory = ({  onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onSubmit = ( event ) => { 
    event.preventDefault()
    if( inputValue.trim().length <= 1 ) return;
    
    // setCategories( (categorias) => [ inputValue, ...categorias]) 
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };
     
   return (
    <form onSubmit={ onSubmit }>
      <input  
        type="text" 
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ ( event ) => setInputValue( event.target.value ) }
      />
    </form> 
   
   )
 }
 