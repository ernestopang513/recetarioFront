import React from 'react'

export const InputDinamic = ({values,handleInputChange,addInput,deleteIngrediente,text}) => {

  return (

    <div>
        <label>{text}</label>
        <br/>
      {
        values.map((value,index) => 
        <div key={`${index}div`}>

          <input
            key={index}
            value={value.value}
            name = 'value'
            autoComplete='off'
            onChange={e => handleInputChange(e,index)}
          />
          <button
              key={`${index}delete`}
              onClick = {(e)=> deleteIngrediente(e,index)}
          >-</button>
          
          <br key={`${index}br`}/>
        
        </div>
        )
      }
      <button
        onClick={addInput}
        
      >+</button>


      <br/>
    </div>
  )
}
