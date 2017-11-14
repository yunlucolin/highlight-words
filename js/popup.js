new Vue({
  el: '.root',
  methods: {
    check: function () {
      chrome.tabs.getSelected(null, function(tab) {
        utils.sendMessage({type: 'check', tabId: tab.id});
        self.close();
      });
    },
    add: function () {
      utils.sendMessage({type: 'add'});
      self.close();
    },
    remove: function () {
      utils.sendMessage({type: 'remove'});
      self.close();
    },
    stop: function () {
      chrome.tabs.getSelected(null, function(tab) {
        utils.sendMessage({type: 'stop', tabId: tab.id});
        self.close();
      });
    }
  }
});
