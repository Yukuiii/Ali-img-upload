//创建一个新的标签页
chrome.action.onClicked.addListener(function () {
    chrome.tabs.create({
        url: "https://filebroker.aliexpress.com/AliImgUpload"
    });
});