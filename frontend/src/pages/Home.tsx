import React from 'react'
import styles from '../styles/home.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
     const navigate = useNavigate()

     const handleQuiz = (e:React.FormEvent)=>{
          e.preventDefault()
          navigate("/hiraganaQuiz")
     }

  return (
    <div className={styles.container} >
          <span >Japanesne Language Alphabets</span>
          <span onClick={handleQuiz} >Hiragana Quiz</span>
    </div>
  )
}
