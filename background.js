var checking = false;
var sensitiveWords;

chrome.browserAction.onClicked.addListener((tab) => {
  checking = !checking;
  if(checking) {
    chrome.browserAction.setIcon({path:"./res/img/icon_hightlight_words_running_48X48.png"});
    sensitiveWords = window.prompt('请填入筛查词汇（以空格隔开）');
    if(sensitiveWords){
      chrome.tabs.sendMessage(tab.id, {action: 'Check', sensitiveWords: sensitiveWords});
    }
    chrome.tabs.onUpdated.addListener(updateListenser);
  } else {
    chrome.browserAction.setIcon({path:"./res/img/icon_hightlight_words_default_48X48.png"});
    chrome.tabs.sendMessage(tab.id, {action: 'Stop', sensitiveWords: sensitiveWords});
    // TODO store all tabs where ran mark.js, and unmark all them. 
    chrome.tabs.onUpdated.removeListener(updateListenser);
  }
});

 var updateListenser = (tabId, changeInfo, tab) => {
  if(changeInfo.status === 'complete' && sensitiveWords) {
    // setTimeout(() => {
    //   chrome.tabs.sendMessage(tabId, {action: 'Check', sensitiveWords: sensitiveWords});
    // }, 1000);
    // TODO how to ensure to get message when error in the web?
    chrome.tabs.sendMessage(tabId, {action: 'Check', sensitiveWords: sensitiveWords});
  }
};
