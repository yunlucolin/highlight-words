var utils = utils || {};

(function(){
	/**
	 * @method      pad
	 * @author Colin
	 * @description
	 * []
	 * @param       {[type]} n
	 * @param       {[type]} width
	 * @param       {[type]} z
	 * @return      {[type]}
	 */
	utils.pad = (n, width, z) => {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	/**
	 * @method      shortStr
	 * @author Colin
	 * @description
	 * []
	 * @param       {[type]} str
	 * @param       {[type]} num
	 * @return      {[type]}
	 */
	utils.shortStr = (str, num) => {
		if (str.length > num) {
			str = str.substring(0, num);
		}
		return str;
	};

	/**
	 * @method      sendMessage
	 * @author Colin
	 * @description
	 * [chrome.runtime.sendMessage]
	 * @param       {[JSON]}    content
	 * @return      {[type]}
	 */
  // TODO {type:, details}
	utils.sendMessage = (content, cb) => {
	  chrome.runtime.sendMessage(content, cb);
	};

	/**
	 * @method      logOnBg
	 * @author Colin
	 * @description
	 * [chrome.runtime.sendMessage to console.log() in background.js]
	 * @param       {[type]} str
	 * @return      {[type]}
	 */
	utils.logOnBg = (str) => {
	  utils.sendMessage({
	    type: 'log',
	    msg: str
	  });
	};
})();
