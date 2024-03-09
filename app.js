const inp1 = document.getElementById("person1");
const inp2 = document.getElementById("person2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function Message(message, usser) {
  this.message = message;
  this.usser = usser;
}

if (inp1 != null || btn1 != null) {
  let msgArr = JSON.parse(localStorage.getItem("messages1"));
  if (msgArr === null) {
    msgArr = [];
    localStorage.setItem("messages1", JSON.stringify(msgArr));
  }
  btn1.onclick = () => {
    let tempMsgArr = JSON.parse(localStorage.getItem("messages1"));
    let msg = new Message(inp1.value, "person1");
    tempMsgArr.push(msg);
    localStorage.setItem("messages1", JSON.stringify(tempMsgArr));
    inp1.value = "";

    displayMsg();
  };
}

if (inp2 != null || btn2 != null) {
  let msgArr = JSON.parse(localStorage.getItem("messages1"));
  if (msgArr === null) {
    msgArr = [];
    localStorage.setItem("messages1", JSON.stringify(msgArr));
  }

  btn2.onclick = () => {
    let tempMsgArr = JSON.parse(localStorage.getItem("messages1"));
    let msg = new Message(inp2.value, "person2");
    tempMsgArr.push(msg);
    localStorage.setItem("messages1", JSON.stringify(tempMsgArr));
    inp2.value = "";

    displayMsg2();
  };
}

const msg1 = document.getElementById("message1");
function displayMsg() {
  let msgArr = JSON.parse(localStorage.getItem("messages1"));
  let uiHtml = "";

  if (msg1 != null) {
    msgArr.forEach((val) => {
      uiHtml += ` <div class="${val.usser === "person1" ? "right" : "left"}">
        <span>${val.message}</span>
      </div>`;
    });
    msg1.innerHTML = uiHtml;
  }
}

displayMsg();

const msg2 = document.getElementById("message2");
function displayMsg2() {
  let msgArr = JSON.parse(localStorage.getItem("messages1"));
  let uiHtml = "";

  if (msg2 != null) {
    msgArr.forEach((val) => {
      uiHtml += ` <div class="${val.usser === "person1" ? "right2" : "left2"}">
        <span>${val.message}</span>
      </div>`;
    });
    msg2.innerHTML = uiHtml;
  }
}

displayMsg2();

function handleDataChange() {
  window.addEventListener("storage", function (event) {
    if (event.key === "messages1") {
      const updateData = this.localStorage.getItem("messages1");

      console.log(updateData);
      displayMsg2();
      displayMsg();
    }
  });
}
handleDataChange();
