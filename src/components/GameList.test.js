import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GamesList from './GamesList';

test('GamesList component should render as expected', () => {
	const game = { _id: 0, cover: '', title: ''};
	const games = [game];
	const component = shallow(<GamesList games={games} deleteGame={() => false} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
