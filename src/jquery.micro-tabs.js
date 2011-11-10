/*!
 * jQuery micro tabs plugin
 * http://github.com/wallin/jquery-micro-tabs
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 */
(function ($) {
  $.fn.tabs = function (panes, opts) {
    // Ensure sane defaults
    opts = $.extend({ cssClass: 'active' }, opts);

    // Keep reference to all tabs and currently selected tab
    var self = this;
    var current = null;

    // Get the corresponding panes
    self.panes = $(panes);
    if (self.length !== self.panes.length) {
      throw "Number of tabs and panes differ";
    }

    // Respond to tab clicks
    self.click(function () {
      var idx, pane, el = this;
      // No need to do anything if current tab is clicked
      if (current === el) {
        return true;
      }
      current = el;

      // Highlight selected tab and display its corresponding pane
      // At the same time de-highlight and hide the other tabs/panes
      idx = self.index(el);
      $(el).addClass(opts.cssClass);
      self.not(el).removeClass(opts.cssClass);
      pane = self.panes.eq(idx).show();
      self.panes.not(pane).hide();

      // Invoke user defined click callback, if any
      if (typeof opts.onClick === 'function') {
        setTimeout(function () {
          opts.onClick.call(el, idx);
        }, 0);
      }
      return true;
    });

    // Finally, select the first tab and return
    return self.eq(0).click();
  };
}(jQuery));