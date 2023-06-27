import { configureStore, createSlice, current } from "@reduxjs/toolkit";

type QnState = {
    q_id:string,
    ques:string,
    o_id:string[],
    opt:string[],
    choice:string
}

let questions : QnState[] = [
    {
        q_id:'q1',
        ques:'What is your favourite fruit ?',
        o_id:['o1','o2','o3','o4'],
        opt:['Apple','Banana','Cherry','Durian'],
        choice:''
    },
    {
        q_id:'q2',
        ques:'What is the color of your bugatti ?',
        o_id:['o1','o2','o3','o4'],
        opt:['Red','Blue','White','No Bugatti'],
        choice:''
    },
    {
        q_id:'q3',
        ques:'What is 1+1 ?',
        o_id:['o1','o2','o3','o4'],
        opt:['1','2','3','4'],
        choice:''
    },
    {
        q_id:'q4',
        ques:'Who is the next Superman ?',
        o_id:['o1','o2','o3','o4'],
        opt:['Tom Holland','Kevin Hart','Rock','Henry Cavil'],
        choice:''
    }
]

if(sessionStorage.getItem('quiz')){
    let qns:string|null= sessionStorage.getItem('quiz')
    if(qns)questions = JSON.parse(qns).questions
}

const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        questions
    },
    reducers:{
        setQuiz :(state,action)=>{
            state = action.payload
        },
        submitQuiz: (state)=>{
            console.log(current(state).questions)
        },
        answerQuestion : (state,action)=>{
            const {q_id,choice} = action.payload
            let question = state.questions.find((qn)=>(qn.q_id===q_id))
            if(question)question.choice = choice
            sessionStorage.setItem('quiz',JSON.stringify(current(state)))
        }
    }
})

export default configureStore({
    reducer:{
        quiz:quizSlice.reducer
    }
})

export const {submitQuiz,answerQuestion,setQuiz} = quizSlice.actions

export const selectQuestions = (state:QnState) => state