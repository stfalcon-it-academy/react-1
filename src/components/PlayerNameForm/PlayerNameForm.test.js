import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayerNameForm from './PlayerNameForm';
import { shallowWithIntl } from '../../helpers/testHelpers';

configure({ adapter: new Adapter() });

describe('PlayerNameForm component', () => {
  it('receives input value', () => {
    const values = ['', '123', 'asdf'];
    values.forEach(value => {
      expect(
        shallowWithIntl(<PlayerNameForm value={value} />)
          .find('input')
          .props().value,
      ).toEqual(value);
    });
  });
});
