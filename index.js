'use strict';

var button = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'Example heading ',
    React.createElement('span', { className: 'badge badge-pill badge-warning' }, 'New'),
  ),
  React.createElement(
    'button',
    {
      className: 'btn btn-primary',
      onClick: function onClick() {
        return alert('button clicked');
      },
    },
    'Button text',
  ),
);

ReactDOM.render(button, document.getElementById('app'));
