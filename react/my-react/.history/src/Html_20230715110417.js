import {Li} from './Li';
import {useState ,  useRef} from 'react'
export function ChatBox(){
    const [isBodyModified, setIsBodyModified] = useState(false);
    const [useText, setuseText] = useState([]);
    const inputRef = useRef(null);
    const mode = "mode_comment";
    const close = "close";
    const handleChatSubmit = () =>{
        const messAge = inputRef.current.value;
        inputRef.current.value = '';
        setuseText([...useText, [messAge,'outgoing']]); 
    }
    const handleButtonClick = () => {
        setIsBodyModified(!isBodyModified);
      };
    return(
    <body  className={isBodyModified ? 'show-chatbot' : null}>
        <button className="button-toggle" onClick={handleButtonClick}>
            <span className="material-symbols-outlined">{mode}</span>
            <span className="material-symbols-outlined">{close}</span>
        </button>
        <main className="mainbox">    
            <div className="chatbox">
                <div class="chatcolor">
                    <h2 class="chatfont">ChatBOT</h2>
                </div>
                <ul class="chatbody">
                    <li class="chat imgbot">
                        <span class="material-symbols-outlined robot">smart_toy</span>
                        <p>欢迎来到机器人问答室👋<br />可以直接问我哦！😄</p>
                    </li>
                    <Li props={useText}/>
                </ul>
            </div>
            <div class="inputtext">
                <textarea placeholder="就算是机器人也要文明用语哦(⊙o⊙)…！" required ref={inputRef}></textarea>
                <span id="cssrrow" class="material-symbols-outlined" onClick={handleChatSubmit}>chevron_right</span>
            </div>
        </main>
    </body>
    )
}

