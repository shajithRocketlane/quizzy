import { useState } from "react"
import { styled } from "styled-components"
import QuizCard from "../components/QuizCard"

const StyledSearch = styled.form`
    input{
        padding: 15px 15px;
        width: 400px;
        font-size: 14px;
        background-color: whitesmoke;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    button{
        padding: 15px 15px;
        font-size: 14px;
        outline: none;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #111;
    }

    button:hover{
        background-color: #1f1f1f;
        transition:150ms ease-in-out;
        cursor: pointer;
    }

    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 40px;
`

const StyledResults = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

function BrowseQuiz() {
    const [search,setSearch] = useState<string>('')
  return (
    <div>
        <StyledSearch>
            <input 
            onChange={(e)=>{setSearch(e.target.value)}}
            type="text" value={search} placeholder="Example: Java Quiz"/>
            <button type="button">Search</button>
        </StyledSearch>
        <StyledResults>
            {/* <p>No Search Results</p> */}
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
            <QuizCard/>
        </StyledResults>
    </div>
  )
}

export default BrowseQuiz