'use strict';

var textExample = 'І навіть такий текст';

var button = React.createElement(
  'ul',
  { className: 'list-group' },
  React.createElement('li', { className: 'list-group-item' }, '\u0422\u0435\u043A\u0441\u0442'),
  React.createElement('li', { className: 'list-group-item' }, 'Ще текст'),
  React.createElement(
    'li',
    { className: 'list-group-item' },
    '\u0429\u0435 \u0442\u0430\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442',
  ),
  React.createElement('li', { className: 'list-group-item' }, textExample),
  React.createElement('li', { className: 'list-group-item' }, '' + textExample),
  React.createElement('li', { className: 'list-group-item' }, '\u0427\u0438\u0441\u043B\u043E \u2192 ', 3.14),
  React.createElement(
    'li',
    { className: 'list-group-item' },
    'JSX \u0435\u043B\u0435\u043C\u0435\u043D\u0442 \u2192 ',
    React.createElement(
      'span',
      null,
      '\u0422\u0443\u0442 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0441\u0435 \u0442\u0435 \u0441\u0430\u043C\u0435 \u0456 \u043D\u0430 \u043D\u0435\u0437\u043B\u0456\u0447\u0435\u043D\u043D\u0456\u0439 \u0433\u043B\u0438\u0431\u0438\u043D\u0456',
    ),
  ),
  React.createElement('li', { className: 'list-group-item' }, '\u041C\u0430\u0441\u0438\u0432 \u2192', ' ', [
    'Текст',
    3.14,
    React.createElement(
      'span',
      { key: 0, className: 'badge badge-secondary' },
      'JSX \u0435\u043B\u0435\u043C\u0435\u043D\u0442',
    ),
  ]),
);

ReactDOM.render(button, document.getElementById('app'));
