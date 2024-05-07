import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { TitleApp } from "./components/TitleApp";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer']);

  const onAddCategory = ( inputValue ) => {

    if( categories.includes( inputValue ) ) return;
    setCategories([ inputValue, ...categories ])   

  };
  
    
  return (
    <>

      <TitleApp />

      <AddCategory 
        onNewCategory = { inputValue => onAddCategory( inputValue )}
      />
      
      { categories.map( category => <GifGrid key={category} category={ category }/>)}
      
        
    </>
  )
}
 