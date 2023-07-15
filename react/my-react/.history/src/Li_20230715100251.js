import {ChatBot} from './ChatBot'
export const Li = (props) =>{

    const [text,direction] = props.props;
    return (
    <>        
        
        <ChatBot props={text}/>
    </>
    )
}