// import {useState, useEffect} from 'react'

// export function ChatgenerateResponse(props){
//     const [messAge,setmessAge] = useState([]);
//     const API_URL = 'https://api.openai.com/v1/chat/completions';
//     const API_KEY = "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"; 
//     let usermessAge = props.props;
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: 'gpt-3.5-turbo',
//           messages: [{ role: 'user', content: usermessAge }],
//         }),
//       };
      
//       useEffect(() => {
//         fetch(API_URL, requestOptions)
//           .then(resolve => resolve.json())
//           .then(data => {
//             setmessAge([...messAge, [data.choices[0].message.content.trim()]]);
//           })
//           .catch(() => {
//             setmessAge([...messAge, ["哼！ 出错啦 一定是你的密钥有问题唉嘿~"]]);
//           });
//       }, [messAge]);
      
//     return (
//         <>
//             {messAge.map((e) => (
//                 <li className='chat imgbot'>
//                     <span className="material-symbols-outlined robot">smart_toy</span>
//                     <p>{e}</p>
//                 </li>
//             ))}
            
//         </>
//     )
// }

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
    setIsLoading(true); // 开始请求，设置加载状态为 true

    fetch(API_URL, requestOptions)
      .then((resolve) => resolve.json())
      .then((data) => {
        setmessAge((prevMessages) => [...prevMessages, data.choices[0].message.content.trim()]);
        setIsLoading(false); // 请求完成，设置加载状态为 false
      })
      .catch(() => {
        setmessAge((prevMessages) => [...prevMessages, '哼！ 出错啦 一定是你的密钥有问题唉嘿~']);
        setIsLoading(false); // 请求完成，设置加载状态为 false
      });
  }, [usermessAge]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        messAge.map((e) => (
          <li key={e} className='chat imgbot'>
            <span className='material-symbols-outlined robot'>smart_toy</span>
            <p>{e}</p>
          </li>
        ))
      )}
    </>
  );
}
