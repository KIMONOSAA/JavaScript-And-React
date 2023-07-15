
import { useState, useEffect } from 'react';

export function ChatgenerateResponse( props) {
    const [messAge, setmessAge] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = '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';
    let usermessAge = props.props;
        const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: usermessAge }],
        }),
    };

    
    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        return data.choices[0].message.content.trim();
      } catch (error) {
        console.error(error);
        return 'Oops! Something went wrong. Please try again.';
      }
    return (
        <>
        {isLoading ? (
            <li  className='chat imgbot'>
                <span className='material-symbols-outlined robot'>smart_toy</span>
                <p>Loading...</p>
            </li>
        ) : (
            messAge.map((e,index) => (
            <li key={index} className='chat imgbot'>
                <span className='material-symbols-outlined robot'>smart_toy</span>
                <p>{e}</p>
            </li>
            ))
        )}
        </>
    );
}

