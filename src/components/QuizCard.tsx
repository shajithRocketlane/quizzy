import { styled } from "styled-components"

const StyledCard = styled.div`
  width: 80%;
  max-width: 800px;
  border: 1px solid lightgrey;
  & .title{
    background-color: whitesmoke;
    padding: 10px;
    margin: 0px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  & p{
    padding: 5px;
    margin: 5px;
  }
  border-radius: 5px;
`

function QuizCard() {
  return (
    <StyledCard>
        <p className="title">Quiz Name</p>
        <p>Difficulty:Easy</p>
        <p>Total No of Questions: 10</p>
    </StyledCard>
  )
}

export default QuizCard