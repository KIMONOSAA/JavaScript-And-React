import {}

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
                <Li />
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