import React from 'react'

export default function ReturnName(props) {
    
   

    const setEmail = (email) =>{
      return email = email+"@gmail.com"
    }

    if (!email){
      return email = setEmail(props)

    }
    // console.log(setEmail(email))
    
    return [email, setEmail]     
    
}
