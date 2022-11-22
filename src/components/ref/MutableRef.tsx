import {useRef,useState, useEffect} from 'react';

export const MutableRef = () =>{
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | undefined>(undefined)
    //useRef luôn trả về một object có proberty là current
    //Lưu các giá trị qua một tham chiếu bên ngoài functionc component

    const stopTimer = ()=>{
        window.clearInterval(interValRef.current)
    }
    useEffect(()=>{
        interValRef.current = window.setInterval(()=>{
            setTimer((timer) => timer + 1)
        },1000)
        return () => {
            stopTimer()
        }
    },[])
    return(
        <div>
            HookTimer - {timer} - 
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}