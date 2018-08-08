import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../components/Home/Card';

// running some snapshot tests on out Card Component
it('renders without breaking if no data is fed to it', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without breaking if dummy data is fed to it', () => {
  const tree = renderer.create(<Card
    type="electric"
    id="7"
    name="pikachu"
    spriteImgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"/>).toJSON();
  expect(tree).toMatchSnapshot();
});