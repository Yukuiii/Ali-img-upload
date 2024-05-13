chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: "https://filebroker.aliexpress.com/AliImgUpload" }, function(tab) {
        console.log('New tab with ID ' + tab.id + ' opened to ' + tab.url);
    });
});
//监听request请求
chrome.webRequest.onBeforeSendHeaders.addListener