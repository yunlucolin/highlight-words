$(function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'Check') {
      sensitiveWords = request.sensitiveWords;
      $('body').mark(sensitiveWords);
      $('mark').css({background: 'red'});
      // TODO when more than one tab is updating and we are not at the target tab, it doesn't work
    }
    if (request.action === 'Stop') {
      sensitiveWords = request.sensitiveWords;
      $('body').unmark(sensitiveWords);
    }
  });
});
