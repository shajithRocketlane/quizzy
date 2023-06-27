import { useNavigate } from "react-router"
import { styled } from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #111;
    img{
        height: 70px;
        margin:5px;
        cursor: pointer;
    }
    .btn-grp{
        display: flex;
        gap: 10px;
    }
    button{
        padding: 5px 15px;
        background-color: white;
        outline: none;
        border: none;
        border-radius:5px;
        font-size: 16px;
        cursor: pointer;
    }
`

function Navbar() {
    let navigate = useNavigate()
  return (
    <StyledNav>
        <img 
            onClick={()=>navigate('/')}
        src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_6568572.png" alt="logo"/>
        <div className="btn-grp">
            <button onClick={()=>navigate('startquiz')}>Attend</button>
            <button onClick={()=>navigate('createquiz')}>Create</button>
            <button onClick={()=>navigate('browse')}>Browse</button>
        </div>
    </StyledNav>
  )
}

export default Navbar