
import { useState, useEffect } from 'react';

export function ChatgenerateResponse(props) {
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

    useEffect(() => {
        setIsLoading(true);
        fetch(API_URL, requestOptions)
        .then((resolve) => resolve.json())
        .then((data) => {
            if (data.choices && data.choices.length > 0) {
            setmessAge((prevMessages) => [
                ...prevMessages,
                data.choices[0].message.content.trim(),
            ]);
            } else {
                setmessAge((prevMessages) => [
                  ...prevMessages,
                  '哼！ 出错啦 一定是你的密钥有问题唉嘿~',
                ]);
                
            }
            setIsLoading(false);
        })
        .catch(() => {
            setmessAge((prevMessages) => [
            ...prevMessages,
            '哼！ 出错啦 一定是你的密钥有问题唉嘿~',
            ]);
            setIsLoading(false);
        });
    }, []);
    return (
        <>
        {isLoading ? (
        null
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


ChatBot.js:24 
        
        
        POST https://api.openai.com/v1/chat/completions 401
(匿名) @ ChatBot.js:24
commitHookEffectListMount @ react-dom.development.js:23150
invokePassiveEffectMountInDEV @ react-dom.development.js:25154
invokeEffectsInDev @ react-dom.development.js:27351
commitDoubleInvokeEffectsInDEV @ react-dom.development.js:27330
flushPassiveEffectsImpl @ react-dom.development.js:27056
flushPassiveEffects @ react-dom.development.js:26984
commitRootImpl @ react-dom.development.js:26935
commitRoot @ react-dom.development.js:26682
performSyncWorkOnRoot @ react-dom.development.js:26117
flushSyncCallbacks @ react-dom.development.js:12042
(匿名) @ react-dom.development.js:25651
ChatBot.js:24 
        
        
        POST https://api.openai.com/v1/chat/completions 401