# Інтернаціоналізація в `React`
## Пакет `react-intl` [→](https://github.com/yahoo/react-intl/wiki)
### Додавання службових даних
```
import enLocale from 'react-intl/locale-data/en';
import ukLocale from 'react-intl/locale-data/uk';

addLocaleData([...enLocale, ...ukLocale]);
```
### Компоненти:
- `<IntlProvider/>` [→](https://github.com/yahoo/react-intl/wiki/Components#intlprovider)
- `<FormattedMessage/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formattedmessage)
- `<FormattedDate/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formatteddate)
- `<FormattedTime/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formattedtime)
- `<FormattedRelative/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formattedrelative)
- `<FormattedPlural/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formattedplural)
- `<FormattedNumber/>` [→](https://github.com/yahoo/react-intl/wiki/Components#formattednumber)
- розширений синтаксис `<FormattedMessage/>` [→](https://formatjs.io/guides/message-syntax/)

### HOC `injectIntl` [→](https://github.com/yahoo/react-intl/wiki/API#injectintl)
- Date Formatting APIs [→](https://github.com/yahoo/react-intl/wiki/API#date-formatting-apis)
- Number Formatting APIs [→](https://github.com/yahoo/react-intl/wiki/API#number-formatting-apis)
- String Formatting APIs [→](https://github.com/yahoo/react-intl/wiki/API#string-formatting-apis)
