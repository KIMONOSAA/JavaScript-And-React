import {ChatBot} from '''
export const Li = (props) =>{

    const [text,direction] = props.props;
    return (
    <>        <li className={`chat ${direction === 'outgoing' ? 'outgoing' : 'incoming'}`}>
            <p>{text}</p>
        </li>

        <ChatBot />
    </>
    )
}