'use strict';

var truthyValue = true;
var falsyValue = false;

var button = React.createElement(
  'div',
  null,
  truthyValue &&
    React.createElement(
      'p',
      { className: 'alert alert-success' },
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  falsyValue &&
    React.createElement(
      'p',
      null,
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  React.createElement(
    'p',
    null,
    '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
  ) &&
    React.createElement(
      'p',
      { className: 'alert alert-success' },
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  truthyValue ||
    React.createElement(
      'p',
      null,
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  falsyValue ||
    React.createElement(
      'p',
      { className: 'alert alert-success' },
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  React.createElement(
    'p',
    { className: 'alert alert-success' },
    '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
  ) ||
    React.createElement(
      'p',
      null,
      '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
    ),
  truthyValue
    ? React.createElement(
        'p',
        { className: 'alert alert-success' },
        '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
      )
    : React.createElement(
        'p',
        null,
        '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
      ),
  falsyValue
    ? React.createElement(
        'p',
        null,
        '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
      )
    : React.createElement(
        'p',
        { className: 'alert alert-success' },
        '\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C\u0441\u044F',
      ),
  React.createElement(
    'p',
    null,
    '\u0417\u0430\u043C\u0456\u043D\u0430 ',
    React.createElement('code', null, 'switch'),
    ' \u2192\xA0',
    {
      option1: React.createElement('span', null, '\u0412\u0430\u0440\u0456\u0430\u043D\u0442 1'),
      option2: React.createElement('span', null, '\u0412\u0430\u0440\u0456\u0430\u043D\u0442 2'),
      option3: React.createElement('span', null, '\u0412\u0430\u0440\u0456\u0430\u043D\u0442 3'),
      option4: React.createElement('span', null, '\u0412\u0430\u0440\u0456\u0430\u043D\u0442 4'),
    }['option3'],
  ),
);

ReactDOM.render(button, document.getElementById('app'));
