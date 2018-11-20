import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';

import AppHeader from './AppHeader';
import store from '../../redux/store';
import messages from '../../lang/en';

describe('AppHeader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={messages}>
          <AppHeader />
        </IntlProvider>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <IntlProvider locale="en" messages={messages}>
            <AppHeader />
          </IntlProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
