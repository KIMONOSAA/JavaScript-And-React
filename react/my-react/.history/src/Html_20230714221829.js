// import {Li} from './Li';

export function ChatBox(){
    const mode = "mode_comment";
    const close = "close";
    
    
    return(
    <body>
        <button class="button-toggle">
            <span class="material-symbols-outlined">{mode}</span>
            <span class="material-symbols-outlined">{close}</span>
        </button>
        <main class="mainbox">    
            <div class="chatbox">
                <div class="chatcolor">
                    <h2 class="chatfont">ChatBOT</h2>
                </div>
                <ul class="chatbody">
                    <li class="chat imgbot">
                        <span class="material-symbols-outlined robot">smart_toy</span>
                        <p>欢迎来到机器人问答室👋<br />可以直接问我哦！😄</p>
                    </li>
                    
                </ul>
            </div>
            <div class="inputtext">
                <textarea placeholder="就算是机器人也要文明用语哦(⊙o⊙)…！" required onclick></textarea>
                <span id="cssrrow" class="material-symbols-outlined">chevron_right</span>
            </div>
        </main>
    </body>
    )
}