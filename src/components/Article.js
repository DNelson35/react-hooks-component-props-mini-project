import React from 'react'




export default function Article({title, date = 'January 1, 1970', preview, minutes}) { 
    function minutesFuntion(minutes) {
        const arr = []
        let min = Math.ceil(minutes)
      if(min / 5 < 6){
        for(let i = 0; i < min / 5; i++){
            arr.push('☕️')
          }
      } else {
        for(let i = 0; i < min / 10; i++){
            arr.push('🍱')
        }
      }
      return arr
    }
  return (
   <article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview} {minutesFuntion(minutes)}</p>
   </article>
  )
}

