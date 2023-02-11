function createMsg(text, client=true) {
    let data = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        clientClass = ""
    if (client) {
        clientClass = "message_client"
    }
    text = `
  <div class="message ${clientClass}">
    <div class="message__time">${data}</div>
    <div class="message__text">
      ${text}
    </div>
  </div>
        `
    return text
}

function sendMsg(textMsg) {
    let messages = document.querySelector('.chat-widget__messages')
    messages.innerHTML += textMsg
}

let roboTextList = [
    "К сожалению все операторы сейчас заняты, не пишите нам больше",
    "Вы не купили ни одного нашего товара чтобы с нами так разговаривать!",
    "Кто тут?",
    "Где ваша совесть?",
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать"
]
let roboQuest = [
    "Кто тут?",
    "Где ваша совесть?",
]

let chat = document.querySelector(".chat-widget")
chat.addEventListener("click", () => {
    chat.classList.add("chat-widget_active")
})

let chatArea = document.querySelector(".chat-widget__messages-container")
let roboText = createMsg("Добрый день!", client=false)
sendMsg(roboText)

let sendText = document.getElementById("chat-widget__input")
sendText.addEventListener("keydown", (e) => {
    if (e.code == "Enter" && sendText.value.trim() !== "") {
        let textClient = sendText.value,
            msgClient = createMsg(textClient, client=true)
            sendText.value = ""
        sendMsg(msgClient)
        roboTextAnswer = createMsg(roboTextList[Math.floor(Math.random()*roboTextList.length)], client=false)      
        sendMsg(roboTextAnswer)
        chatArea.scrollTop = chatArea.scrollHeight // автоматическая прокрутка при появлении новых сообщений
    }
})
 

