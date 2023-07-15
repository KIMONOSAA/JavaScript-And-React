import { ChatBot } from './ChatBot';

export const Li = (props) => {
    const text = props.props;
    console.log(texxt)
  if (!Array.isArray(text)) {
    return null;
  }

  return (
    <>
      {text.map((e) => (
        <>
          <li className={`chat ${e[1] === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
            <p>{e[0]}</p>
          </li>
          <ChatBot props={{ text: e[0] }} />
        </>
      ))}
    </>
  );
};
