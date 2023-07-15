import { ChatBot } from './ChatBot';

export const Li = (props) => {
  const [text, direction] = props.props;

  return (
    <>
      {text.map((e) => (
       <>
            <li className={`chat ${direction === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
                <p>{e}</p>
            </li>
            <ChatBot props={{ text }} />
       </>
      ))}
    </>
  );
};
