import {useRef,useState} from 'react'

export function ChatgenerateResponse(props){
    const {messAge,setmessAge} = useState()
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = "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"; 
    let usermessAge = props;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: usermessAge}],
        })

    }
    return (
        <>
            <li className='imgbot'>
            <p></p>
          </li>
        </>
    )
}