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
    q_id : string,
    ques: string,
    options : string[],
    o_id:string[],
    index:number
}

function Question({q_id,ques,options,o_id,index}:QuestionProps) {
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
        if(q_id in temp[i]){
            keyExists = true
            temp[i] = {q_id: e.target.value}
        }
    }
    if(!keyExists)temp.push({[q_id]:e.target.value})
    setQna(temp)
    dispatch(answerQuestion({q_id,choice}))
  }

    return (
    <StyledQuestion>
            <div className={index%2?'odd':'even'}>
            <p>{ques}</p>
            {
                options.map((option,index)=>(
                    <div key={index} >
                        <input 
                        type="checkbox" 
                        value={o_id[index]} 
                        checked = {checked.includes(o_id[index])}
                        onChange={(e)=>handleChange(e,o_id[index])}
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