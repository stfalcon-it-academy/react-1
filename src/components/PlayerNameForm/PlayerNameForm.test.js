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

  it('handles submit event', () => {
    const mockFn = jest.fn();
    const form = shallowWithIntl(<PlayerNameForm value={''} onStartGame={mockFn} />);
    expect(mockFn.mock.calls.length).toBe(0);
    form.find('form').simulate('submit', { preventDefault: () => {} });
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('handles player name input change', () => {
    const mockFn = jest.fn();
    const form = shallowWithIntl(<PlayerNameForm value={''} onChange={mockFn} />);
    expect(mockFn.mock.calls.length).toBe(0);
    form.find('input').simulate('change');
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
