'use strict';

var button = React.createElement(
  'button',
  {
    className: 'btn btn-primary',
    onClick: function onClick() {
      return alert('button clicked');
    },
  },
  'Button text',
);

ReactDOM.render(button, document.getElementById('app'));
