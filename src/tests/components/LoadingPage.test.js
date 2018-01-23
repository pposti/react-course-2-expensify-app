import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('Should correctly render LoadingPage', () => {

    const wrapper = shallow(<loadingPage />);
    expect(wrapper).toMatchSnapshot();

});