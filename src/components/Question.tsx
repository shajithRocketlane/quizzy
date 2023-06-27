import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import {styled} from 'styled-components'
import { answerQuestion } from "../store"

const StyledQuestion = styled.form`
    & .odd{
        background-color: white;
    }
    & .even{
        background-color: whitesmoke;
    }
    & > div{
        padding: 25px;
        font-size: 18px;
    }
    & input{
        margin: 10px;
    }
`


type QuestionProps = {
    qid : string,
    question: string,
    options : string[],
    oid:string[],
    index:number
}

function Question({qid,question,options,oid,index}:QuestionProps) {
  const [checked,setChecked] = useState<string[]>([])
  const dispatch = useDispatch()
  const [qna,setQna] = useState<{[qid:string]:string}[]>([])

  useEffect(()=>{
        let qns = sessionStorage.getItem('quiz')
       if(sessionStorage.getItem('quiz')){
        let checks = []
        let questions = JSON.parse(qns).questions
        
        if(questions[index].choice)checks.push(questions[index].choice)
        setChecked(checks)
       } 
  },[])

  function handleChange(e:React.ChangeEvent<HTMLInputElement>,choice:string){
    setChecked([e.target.value])
    let temp = qna
    let keyExists = false
    for(let i=0;i<temp.length;i++){
        if(qid in temp[i]){
            keyExists = true
            temp[i] = {qid: e.target.value}
        }
    }
    if(!keyExists)temp.push({[qid]:e.target.value})
    setQna(temp)
    dispatch(answerQuestion({qid,choice}))
  }

    return (
    <StyledQuestion>
            <div className={index%2?'odd':'even'}>
            <p>{question}</p>
            {
                options.map((option,index)=>(
                    <div key={index} >
                        <input 
                        type="checkbox" 
                        value={oid[index]} 
                        checked = {checked.includes(oid[index])}
                        onChange={(e)=>handleChange(e,oid[index])}
                        />
                        {option}
                    </div>
                ))
            }
            </div>
    </StyledQuestion>
  )
}

export default Question