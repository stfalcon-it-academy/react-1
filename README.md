# `Redux` [→](https://redux.js.org)
## Складність підтримання актуальності даних
## 3 принципи `Redux`
- єдине джерело інформації;
- напряму дані можна тільки зчитувати;
- зміна даних відбувається лише з допомогою чистих функцій.

## `store`, як простий об'єкт
## `actions`
- `actionTypes`;
- об'єкт `action`;
- `action creator`.

## `reducers`
- `defaultState`;
- обробка `actions`. `switch`.

## `store`
- ініціалізація
```
import { createStore } from 'redux';
import reducer from 'reducer';

const store = createStore(reducer);
```

- отримання даних
```
store.getState();
```

- зміна даних
```
store.dispatch(action);
```

- підписка на зміни
```
const unsubscribe = store.subscribe(() =>
  console.log(store.getState());
);
...
unsubscribe();
```

# Ззаємодія з `react`.
## Створення `store`.
- `combineReducers`
```
const rootReducer = combineReducers({ reducer1, reducer2 });
```

- Redux DevTools extension [→](http://extension.remotedev.io/)
```
let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  store = createStore(rootReducer);
}
```

## Підписка на `store`. Компонент `<Provider/>`.
## Отримання даних компонентами. HOC `connect`.
```
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { someFieldFromState } = state;
  return {
    dataFromRedux: someFieldFromState,
  };
};
const ComponentExtendedWithState = connect(mapStateToProps)(Component);
```

## Отримання `actionCreators` компонентами.
```
import { bindActionCreators } from 'redux';
import { actionCreator } from 'actions';

const mapDispatchToProps = dispatcher => {
  return bindActionCreators({ actionCreator }, dispatcher);
};
const ComponentExtendedWithActionCreator  = connect(null, mapDispatchToProps )(Component);
```
