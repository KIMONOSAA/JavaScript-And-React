import { ChatBot } from './ChatBot';

export const Li = (props) => {
    const text = props.props;
    if(!Array.isArray(text)){
        return null;
    }
  return (
    <>
      {text.map((e) => (
       <>
            <li className={`chat ${e[1] === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
                <p>{e}</p>
            </li>
            <ChatBot props={{ text: }} />
       </>
      ))}
    </>
  );
};
