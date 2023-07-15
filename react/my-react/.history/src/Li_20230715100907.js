import { ChatBot } from './ChatBot';

export const Li = (props) => {
  const [text, direction] = props.props;

  return (
    <>
      {text ? (
        <>
          <li className={`chat ${direction === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
            <p>{text}</p>
          </li>
          <ChatBot props={{ text }} />
        </>
      ) : null}
    </>
  );
};
