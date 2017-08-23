import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameForm from './GameForm';

test('GameForm component should render as expected', () => {
	const component = shallow(<GameForm />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
