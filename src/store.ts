import { configureStore, createSlice, current } from "@reduxjs/toolkit";

type QnState = {
    qid:string,
    qn:string,
    oid:string[],
    opt:string[],
    choice:string
}

let questions : QnState[] = [
    {
        qid:'q1',
        qn:'What is your favourite fruit ?',
        oid:['o1','o2','o3','o4'],
        opt:['Apple','Banana','Cherry','Durian'],
        choice:''
    },
    {
        qid:'q2',
        qn:'What is the color of your bugatti ?',
        oid:['o1','o2','o3','o4'],
        opt:['Red','Blue','White','No Bugatti'],
        choice:''
    },
    {
        qid:'q3',
        qn:'What is 1+1 ?',
        oid:['o1','o2','o3','o4'],
        opt:['1','2','3','4'],
        choice:''
    },
    {
        qid:'q4',
        qn:'Who is the next Superman ?',
        oid:['o1','o2','o3','o4'],
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
            const {qid,choice} = action.payload
            let question = state.questions.find((qn)=>(qn.qid===qid))
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

export const {submitQuiz,answerQuestion} = quizSlice.actions

export const selectQuestions = (state:QnState) => state