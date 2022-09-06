import React, { createContext, useState } from 'react'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Abhishek",
"Age":"23",
"Course":"HTML",
"Batch":"FEB",
"Branch":"CSE",
"id":"1"

},



    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail
