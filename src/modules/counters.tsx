//1.액션타입
//2. 액션리턴해주는 함수
//3. 초기값
//4. 리듀서 만들기

//액션타입
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "conuter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

//액션생성 함수
export const increase = () =>({type:INCREASE})
export const decrease = () =>({type:DECREASE})
export const increaseBy = (diff:number) =>({
    type:INCREASE_BY,
    payload:diff
})

//state의 타입을 지정
type CounterState = {
    count:number;
}

//초기상태 생성
const initialState = {
    count:0
}

//리듀서에 액션타입 지정
//ReturnType<typeof  ---> 특정함수의 반환값을 추론
type CounterAction = 
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>


//리듀서 생성
export default function counter(state:CounterState = initialState,action:CounterAction):CounterState{
    switch(action.type){
        case 'counter/INCREASE':
            return {count:state.count+1};
        case 'conuter/DECREASE':
            return {count:state.count-1};
        case 'counter/INCREASE_BY':
            return {count:state.count+action.payload};
        default :
            return state;
    }
}