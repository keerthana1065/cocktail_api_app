import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Content() {
  const[menu,setMenu]=useState([])
  useEffect(()=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then(res=>{
      console.log(res.data);
       setMenu(res.data.drinks);
    }).catch(err=>{
        console.log(err);})
      
    },[])
  
   const menuItems= menu.map((drink)=>{
        return <div id="tails">
<h4 id="tailname">{drink.strDrink }	</h4>
<img src={drink.strDrinkThumb} id="pic"></img>

        </div>



    })

  return (
    <div className="container">

    {menuItems}
    </div>
  )

}
export default Content