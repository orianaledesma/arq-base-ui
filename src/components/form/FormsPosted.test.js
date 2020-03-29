import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FormPosted } from './FormPosted';

describe('FormPosted', () => {
    it('T1 - Render component with prop compare to Snapshot', () => {
        const wrapperFormPosted = shallow(<FormPosted lastId={1} />);
        expect(toJson(wrapperFormPosted)).toMatchSnapshot();
    });

    it('T2 should render correctly', () => {
        const wrapperFormPosted = shallow(<FormPosted lastId={1} />);
        expect(
            wrapperFormPosted.find('.FormPosted').contains('Tell me!')
        ).toEqual(true);
        expect(wrapperFormPosted.find('#btnClean').contains('Clean')).toEqual(
            true
        );
        expect(wrapperFormPosted.find('#btnSave').contains('Save')).toEqual(
            true
        );
    });

    /* fixme: bug01 - onclick method in components
    it('T3 Simulation click', () => {
        const mockCallBack = jest.fn();
        const wrapperFormPosted = mount(<FormPosted lastId={1} />);

        wrapperFormPosted.find('#btnCancel').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });
    */
});
