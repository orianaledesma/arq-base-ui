import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from './Home';

describe('Home', () => {
    it('renders without crashing given the required props', () => {
        const wrapper = shallow(<Home />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
