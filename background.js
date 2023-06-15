// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//         chrome.tabs.executeScript(tabId, {file: 'content.js'});
//     }
// });



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (changeInfo.status == 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target : {tabId : tabId},
            files : [ "otro.js" ],
        });
    }	
    
  });