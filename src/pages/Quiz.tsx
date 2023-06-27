import { useState } from "react"
import Question from "../components/Question"
import {styled } from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { selectQuestions, submitQuiz } from "../store"

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



function Quiz() {
    const dispatch = useDispatch()
    const questions = useSelector(selectQuestions).quiz.questions

  return (
    <StyledQuiz>
        <p>Quiz</p>
        <div>
        {
            questions.map(({qid,qn,oid,opt},index)=>(
                <Question qid={qid} question={qn} oid={oid} options={opt} index={index} key={index}/>
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