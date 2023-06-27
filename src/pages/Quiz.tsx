import { useEffect, useState } from "react"
import Question from "../components/Question"
import {styled } from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { selectQuestions, setQuiz, submitQuiz } from "../store"
import axios from "axios"

const StyledQuiz = styled.div`
  margin-top: 20px;
  & > p{
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  & .flex button{
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    color: white;
    background-color: #111;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  }

  & .flex button:hover{
    background-color: #1f1f1f;
    transition: 150ms ease-in-out;
  }

  & .flex{
    display: flex;
    justify-content: center;
  }

` 

async function fetchQuiz(){
  const data = await axios.get('https://dadf-118-185-191-21.ngrok-free.app/quiz/combo').then(data => data.data)
  console.log(data)
  return data
}

function Quiz() {
    const dispatch = useDispatch()
    const state = useSelector(selectQuestions)
    useEffect(()=>{
      let data = fetchQuiz()
      dispatch(setQuiz({data}))
      console.log(state)
    },[])
    const questions = useSelector(selectQuestions).quiz.questions

  return (
    <StyledQuiz>
        <p>Quiz</p>
        <div>
        {
            questions.map(({q_id,ques,o_id,opt},index)=>(
                <Question q_id={q_id} ques={ques} o_id={o_id} options={opt} index={index} key={index}/>
            ))
        }
        </div>
        <div className="flex">
          <button type="button" onClick={()=>dispatch(submitQuiz())}>Submit</button>
        </div>
    </StyledQuiz>
  )
}

export default Quiz