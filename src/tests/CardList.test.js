import React from 'react';
import renderer from 'react-test-renderer';

import CardList from '../components/Home/CardList';

// running some snapshot tests on out CardList Component
describe('CardList Component', () => {
  it('Should fail if no data is fed into it', () => {
    const tree = renderer.create(<CardList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('CardList Component', () => {
  it('Should pass if data is fed into it', () => {
    const tree = renderer.create(<CardList
    data={
      [{
      spriteImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          id: "1",
          name: "bulbasaur",
          type: "poison"
        }]
      }/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})