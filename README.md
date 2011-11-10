# jQuery tab plugin

The simplest possible tab-plugin for jQuery.

    $(<tab selector>).tabs(<panes selector>, options)

Number of tabs and panes must match. Tab 0 will be related to pane 0 etc.
It currently only has two configuration options:

* `cssClass`: Which classname to use for the selected tab
* `onClick`: Callback to be invoked when a tab is selected. First argument will
  be tab index (starting from 0)

Example usage:

    $('ul.tabs > li').tabs('.panes > div', {
      cssClass: 'selected',
      onClick: function (tabIndex) {
        alert('You selected tab no. ' + tabIndex);
      }
    });
