import { useNavigate } from "react-router"
import { styled } from "styled-components"

const Container = styled.div`
  margin:0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 15px;
  
  & button{
    padding: 15px;
    font-size: 20px;
    background-color: #111;
    border: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 250px;
  }

  & button:hover{
    background-color: #1f1f1f;
    transition: 150ms ease-in-out;
  }
`

function LandingPage() {
  const navigate = useNavigate()
  return (
    <Container>
        <button onClick={()=>navigate('startquiz')}>Start Quiz</button>
        <button onClick={()=>navigate('createquiz')}>Create A Quiz</button>
        <button onClick={()=>{navigate('browse')}}>Browse Quiz</button>
    </Container>
    // <BrowseQuiz/>
  )
}

export default LandingPage