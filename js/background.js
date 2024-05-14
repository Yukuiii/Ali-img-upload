chrome.action.onClicked.addListener(function () {
    chrome.tabs.create({
        url: "https://filebroker.aliexpress.com/AliImgUpload"
    }, function (tab) {
        // chrome.tabs.executeScript(tab.id, {
        //     code: '(' + createDynamicPage + ')();'
        // }, function () {
        //     console.log('Dynamic page created!');
        // });
    });
});
//监听request请求
// chrome.webRequest.onBeforeSendHeaders.addListener