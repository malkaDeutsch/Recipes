import { useState } from "react";

const Recipe = (props) => {
const regex = /\d+\)/g;


return(
<>

              <h2>{props.recipe.title}</h2>
              <p>{props.recipe.servings}</p>
              <h1>{props.recipe.ingredients.split('|').map((u,index)=>{
                return(
                 <p  key={index}> <input type="checkbox"></input>    {u}</p> 
                )
              })}</h1>

              <h1>{props.recipe.instructions.split('.').map((u,index)=>{
                return(
                 <p  key={index}>{u}</p> 
                )
              })}</h1>
            
</>

)}
export default Recipe

