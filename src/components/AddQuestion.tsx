import { useState } from "react"
import { styled } from "styled-components"
import { v4 as uuidv4 } from 'uuid';


type QnState = {
    qid:string,
    qn:string,
    oid:string[],
    opt:string[],
    choice:string
}

const StyledAddQn = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    font-family: Arial, Helvetica, sans-serif;

    & p{
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    & button{
        margin: 10px;
        padding: 10px;
        font-size: 14px;
        cursor: pointer;
        width: 120px;
    }
    & input{
        font-size: 14px;
        width: 400px;
        padding: 15px;
        outline:none;
        border: none;
        background-color: whitesmoke;
        border-radius: 10px;
    }
    & button{
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #111;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 5px;
  }

  & button:hover{
    background-color: #1f1f1f;
    transition: 150ms ease-in-out;
  }

  & .options{
    display: flex;
    gap: 10px;
  }
  & .options > p{
    font-size: 14px;
  }

`
const StyledQn = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    width: 100%;
    max-width: 1000px;

    & .qn,.opts{
        font-size: 18px;
    }

    & > div{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: start;
    }

    & .odd{
        background-color: white;
    }
    & .even{
        background-color: whitesmoke;
    }

    & .addqn{
        font-size: 25px;
    }

    & > div button{
        padding: 8px 12px;
        font-size: 14px;
        background-color: #111;
        color: white;
        border: none;
        border-radius: 5px;
    }

    & > div button:hover{
        background-color: #1f1f1f;
        cursor: pointer;
    }

    & .qn{
        font-weight: bold;
        margin-bottom: 10px;
    }

`

function AddQuestion() {
    const [qname,setQname] = useState<string>('')
    const [qns,setQns] = useState<{[qn:string]:string[]}[]>([])
    const [qn,setQn] = useState<string>('')
    const [opt,setOpt] = useState<string>('')
    const [options,setOptions] = useState<string[]>([])
    const [payload,setPayload] = useState<QnState[]>([])

    function addOption(){
        if(opt.length){
            setOptions([...options,opt])
            setOpt('')
        }
    }

function generateRandomIds(count: number): string[] {
  const randomIds: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomId = uuidv4();
    randomIds.push(randomId);
  }

  return randomIds;
}

    function addQuestion(){
        if(qn.length>0){
            setQns([...qns,{[qn]:options}])
            setQn('')
            setOpt('')
            setOptions([])
            let temp:QnState= {
                qid:uuidv4(),
                qn:qn,
                oid:generateRandomIds(4),
                opt:options,
                choice:''
            }
            setPayload([...payload,temp])
            console.log(temp)
        }
    }

    function Remove(index:number){
        let temp = []
        for(let i=0;i<qns.length;i++){
            if(i!==index)temp.push(qns[i])
        }
        setQns(temp)
        console.log(temp)
    }

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }}>
    <StyledAddQn>
        <p>Create A New Quiz</p>
        <input type="text" placeholder="Quiz Name" value={qname} onChange={(e)=>{setQname(e.target.value)}}/>
        <input type="text" placeholder="Enter the question" value={qn}
            onChange={(e)=>{setQn(e.target.value)}}
        />
        <input type="text" placeholder="Enter the option"
            value={opt}
            onChange={(e)=>{setOpt(e.target.value)}}
        />
        <div>
        <button
            type="button"
            onClick={addOption}
        >Add Option</button>
        <button
            type="button"
            onClick={addQuestion}
        >Add Question</button>
        <button onClick={()=>{console.log(qns)}}>Submit</button>
        </div>
        <div className="options">
            {
                options.map((option,index)=>(
                    <p className="choice" key={index}>{option}</p>
                ))
            }
        </div>
    </StyledAddQn>
        <StyledQn>
            {
                qns.length
                ?
                qns.map((qn,index)=>(
                    <div key={index} className={index%2?'odd':'even'}>
                        <div>
                        <p className="qn">{Object.keys(qn)[0]}</p>
                            {
                                qn[Object.keys(qn)[0]].map((option,idx)=>(
                                    <li key={idx} className="opts">{option}</li>
                                ))
                            }
                        </div>
                        <button type="button" onClick={()=>Remove(index)}>Remove</button>
                    </div>
                ))
                :
                <></>
            }
        </StyledQn>
        <div>
        </div>
    </div>
  )
}

export default AddQuestion