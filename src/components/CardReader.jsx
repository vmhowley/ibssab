import React, { useState } from 'react'

function CardReader() {
    const  [ cardData, setCardData ] = useState("%B6545461234613451^DOE/JOHN^00000000000000000000000?;6545461234613451=984651465116111?") 

  const cardDecoder = () => {

  let details1 = card_data.split("^");
  
  let card_number = details1[0];
  card_number = card_number.substring(2);
  
  var names = details1[1].split("/");
  var first_name = names[1];
  var last_name = names[0];
  
  var details2 = details1[2].split(";");
  details2 = details2[1].split("=");
  
  var exp_date = details2[1];
  exp_date = exp_date.substring(0, exp_date.length - 1);
  exp_date = exp_date.substring(2, 3) + "/" + exp_date.substring(0,1);
  document.getElementById('cardnumber').innerHTML = card_number
}
  const handleChange = (e) => {
    setCardData (e.target.value) 
  }
  



    
  return (
    <div>
        <form onSubmit={''} >
        <label htmlFor="cardData">Numero de tarjeta  </label>
        <input name='cardData' id='cardData' onChange={handleChange} type="text" />
        <textarea name="" id="cardnumber"></textarea>
        </form>
    </div>
  )
}

export default CardReader