import React, { useEffect, useState } from 'react'
import { useLazyGetHiraganaApiQuery } from '../services/api'
import styles from "../styles/hiraganaQuiz.module.css"

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
               setHiraganaAlphabetArray(data.hiraganaArray[0].content)
          }
     },[])
     const playAudio = (d:any)=>{
          new Audio(`https://files.tofugu.com/articles/japanese/2014-06-30-learn-hiragana/${d.japanese}.mp3`).play()
     }
  return (<>
    <div className={styles.container}>
     {
          isSuccess ? hiraganaAlphabetArray.map((d:any)=>{
               return <div onClick={()=>playAudio(d)} className={styles.container_card}>
                    <span className={styles.container_card_japanese}>{d.japanese}</span>
                    <p className={styles.container_card_romaji}>{d.romaji}</p>
               </div>
          })          
           :
           <div>Loading...</div>
     }

    </div>
  </>)
}

export default HiraganaQuiz