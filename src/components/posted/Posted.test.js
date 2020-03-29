import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Posted } from './Posted';

describe('Posted', () => {
    it('T1 - Render component with prop compare to Snapshot', () => {
        let posted = {
            id: 1,
            description: 'Test description',
            votes: 0
        };
        const wrapperPosted = shallow(<Posted posted={posted} />);
        expect(toJson(wrapperPosted)).toMatchSnapshot();
    });

    it('T2 should render correctly', () => {
        let posted = {
            id: 1,
            description: 'Test description',
            votes: 0
        };
        const wrapperPosted = shallow(<Posted posted={posted} />);
        expect(wrapperPosted.find('.Posted-title-num').contains(1)).toEqual(
            true
        );
        expect(
            wrapperPosted
                .find('.Posted-description')
                .contains('Test description')
        ).toEqual(true);
        expect(
            wrapperPosted.find('.Posted-footer-vote').contains('vote 0')
        ).toEqual(false);
    });

    it('T3 Simulation click', () => {
        let posted = {
            id: 1,
            description: 'Test description',
            votes: 0
        };
        const mockCallBack = jest.fn();
        const wrapperPosted = shallow(<Posted posted={posted} />);

        wrapperPosted.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(0);
    });
});
