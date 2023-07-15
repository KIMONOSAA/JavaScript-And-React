import React form 'react';
import { ChatgenerateResponse } from './ChatBot';

export const Li = (props) => {
    const text = props.props;
    
  if (!Array.isArray(text)) {
    return null;
  }

  return (
    <>
      {text.map((e, index) => (
        <React.Fragment key={index}>
          <li className={`chat ${e[1] === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
            <p>{e[0]}</p>
          </li>
          <ChatgenerateResponse key={`response-${index}`} props={{ text: e[0] }} />
        </React.Fragment>
      ))}
    </>
  );
  
};
