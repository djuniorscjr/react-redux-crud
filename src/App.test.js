import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from './App';
import store from './config/store';
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		div
	);
});

it('should render the GamesPage component when visiting /games', () => {
	const component = mount(
		<MemoryRouter initialEntries={[ '/games' ]} initialIndex={0}>
			<Provider store={store}>
				<App />
			</Provider>
		</MemoryRouter>
	);

	expect(component.find(GamesPage).length).toBe(1);
});

// it('should render the GamesFormPage component when visiting /game/new', () => {
//   const component = mount(
//     <MemoryRouter initialEntries={[ '/game/new' ]} initialIndex={0}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </MemoryRouter>
//   );
//
//   expect(component.find(GameFormPage).length).toBe(1);
/* }); */
