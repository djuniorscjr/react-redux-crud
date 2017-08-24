import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../config/store';
import { Provider } from 'react-redux';
import GameFormPage from './GameFormPage';

test('GameFormPage component should render as expected', () => {
	const component = shallow(
		<Provider store={store}>
			<GameFormPage />
		</Provider>
	);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
