// import {Li} from './Li';

export function ChatBox(){
    const mode = "mode_comment";
    const close = "close";
    const API_KEY = "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"; 
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const messageElement = chatElement.querySelector('p');

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: usermessAge}],
        })
    }
    
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
                <textarea placeholder="就算是机器人也要文明用语哦(⊙o⊙)…！" required></textarea>
                <span id="cssrrow" class="material-symbols-outlined">chevron_right</span>
            </div>
        </main>
    </body>
    )
}