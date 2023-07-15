
import { useState, useEffect } from 'react';

export function ChatgenerateResponse(props) {
    const [messAge, setmessAge] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = 'sk-2A1hdfsdfffffffffffffffffffffsfgfdgXmgQv3Ua';
    let usermessAge = props.props;
    console.log(props.props)
    useEffect(() => {
        const generateResponse = async () => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: usermessAge }],
                }),
            };

            try {
                const response = await fetch(API_URL, requestOptions);
                const data = await response.json();
                const responseContent = data.choices[0].message.content.trim();
                setmessAge([responseContent]);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setmessAge(['哎呀！出了点问题。请重试。']);
                setIsLoading(false);
            }
        };

        generateResponse();
    }, [usermessAge]);

    return (
        <>
        {isLoading ? (
            <li className='chat imgbot'>
            <span className='material-symbols-outlined robot'>smart_toy</span>
            <p>加载中...</p>
            </li>
        ) : (
            messAge.map((e, index) => (
            <li key={index} className='chat imgbot'>
                <span className='material-symbols-outlined robot'>smart_toy</span>
                <p>{e}</p>
            </li>
            ))
        )}
        </>
    );
    }
