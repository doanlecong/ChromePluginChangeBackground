let changeColor  = document.getElementById("changeBackgroundColorPage");

chrome.storage.sync.get("color", function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function (e) {
    let color = e.target.value;
    chrome.tabs.query({"active" : true, "currentWindow" : true},  function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code : "document.body.style.backgroundColor = '"+color+"';"}
        );
    });
};