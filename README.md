# Тестування `React` i `redux`
## `describe()`
## `it()`
## `expect()` [→](https://jestjs.io/docs/en/using-matchers)
- `.toBe()`
- `.toEqual()`
- `.toBeNull()`
- `.toBeUndefined()`
- `.toBeDefined()`
- `.toBeTruthy()`
- `.toBeFalsy()`
- `.not`
- `.toBeGreaterThan()`
- `.toBeGreaterThanOrEqual()`
- `.toBeLessThan()`
- `.toBeLessThanOrEqual()`
- `.toBeCloseTo()`
- `.toMatch()`
- `.toContain()`
- `.toHaveLength()`
- `.toMatchObject()`
- `.toHaveProperty()`

## Тестування функцій
## Тестування компонентів
### Рендер компонента `ReactDOM.render()`
```
import React from 'react';
import ReactDOM from 'react-dom';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Component />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
```
### Тестування з допомогою знімків
```
import renderer from 'react-test-renderer';

  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });

```
### Пакет `enzyme` [→](https://airbnb.io/enzyme/)
- встановлення:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
- `shallow` i `mount`
- тестування з `react-intl` [→](https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl)

## Тестування `actions`
- емуляція `store`

```
import configureMockStore from 'redux-mock-store';

let store;

beforeEach(() => {
  store = configureMockStore()({});
});
```
- тестування `actionCreator`-ів

```
store.dispatch(actioCreator());
expect(store.getActions()).toEqual([{ type: 'SOME_TYPE' }])
```
- тестування асинхронних `actionCreator`-ів

```
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let httpMock;

beforeEach(() => {
  httpMock = new MockAdapter(axios);
});

it('…', async () => {
  const response = {…};
  httpMock.onGet('/leaderboard').reply(200, response);

  await actionCreator()(store.dispatch);
})
```

## Тестування `reducers`
