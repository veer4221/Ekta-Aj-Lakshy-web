import React from 'react'

import './loginScreen.scss'
import image from "./mainLogo.png"

const LoginScreen = () => {
   return (
      <div className='login'>
         <div className='login__container'>
            <h3 style={{textAlign:'center'}}>એકતા એજ લક્ષ્ય <br/>તમારું  चलच्चित्रम्  માં સ્વાગત છે </h3>
            <img
               src={image}
               alt=''
            />
            <button className="brn btn-primary">મુખ્ય પેજ </button>
           
         </div>
      </div>
   )
}

export default LoginScreen