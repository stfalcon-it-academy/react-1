# Підготовка середовища
## Встановлення `node.js`
- `node -v`
- `npm -v`
- `npm init -y`

# `create-react-app`
## Встановлення
- `npm install -g create-react-app`
- `create-react-app -v`

## Ініціалізація проекту
- `create-react-app *`

## Огляд файлів проекту
- `README.md`
- `.gitignore`
- `package.json`
- `public/`
  - `README.md`
  - `index.html`
  - `favicon.ico`
  - `manifest.json`
- `src/`
  - `index.js`
  - `index.css`
  - `App.js`
  - `App.test.js`
  - `registerServiceWorker.js`
- `build/`

## Команди `npm`
- npm scripts
- `node *.js`
- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

# Додаткові інструменти
## `prettier`
- `npm install --save-dev prettier`
- `.prettierrc`
```
{
  "useTabs": false,
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true
}
```

### Автоматичне форматування
- WebStorm [→](https://prettier.io/docs/en/webstorm.html)
- npm [→](https://prettier.io/docs/en/watching-files.html)

## React Developer Tools

# Огляд можливостей
- `webpack`
- `Babel`
- `eslint`
- Підтримка браузерів [→](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-browsers)
- Hot Module Replacement
```
if (module.hot) {
  module.hot.accept();
}
```
- Розділення коду [→](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#importing-a-component)
- Обробка `CSS` [→](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)