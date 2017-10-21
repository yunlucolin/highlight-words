$(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'Check') {
      sensitiveWords = request.sensitiveWords;
      $('body').mark(sensitiveWords);
      $('mark').css({background: 'red'});
    }
    if (request.action === 'Stop') {
      sensitiveWords = request.sensitiveWords;
      $('body').unmark(sensitiveWords);
    }
  });
});
