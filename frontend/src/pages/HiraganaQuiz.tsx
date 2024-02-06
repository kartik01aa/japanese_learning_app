import React, { useEffect, useState } from 'react'
import { useLazyGetHiraganaApiQuery } from '../services/api'

const HiraganaQuiz = () => {

     const [hiraganaQuizData,{data,isSuccess}] = useLazyGetHiraganaApiQuery()
     const [hiraganaAlphabetArray, setHiraganaAlphabetArray] = useState([])
     const apiCall = async()=>{
          await hiraganaQuizData()
     }
     useEffect(()=>{
          apiCall()
          if(isSuccess && data){
               console.log(data.hiraganaArray[0].content)
               // setHiraganaAlphabetArray(data)
          }
     },[])
  return (<>
    <div>
     {
          isSuccess ? <div>hi</div>
           :
           <div>Loading...</div>
     }

    </div>
  </>)
}

export default HiraganaQuiz