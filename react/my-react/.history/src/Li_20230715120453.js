import { ChatgenerateResponse } from './ChatBot';

export const Li = (props) => {
    const text = props.props;
    
  if (!Array.isArray(text)) {
    return null;
  }

  return (
    <>
      {text.map((e,index) => (
        <>
          <li key={index} className={`chat ${e[1] === 'outgoing' ? 'outgoing' : 'imgbot'}`}>
            <p>{e[0]}</p>
          </li>
          <ChatgenerateResponse props={{ text: e[0] }} />
        </>
      ))}
    </>
  );
};

Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Li`. See https://reactjs.org/link/warning-keys for more information.
    at Li (http://localhost:3000/static/js/bundle.js:407:22)
    at ul
    at div
    at main
    at body
    at ChatBox (http://localhost:3000/static/js/bundle.js:213:94)
    at App