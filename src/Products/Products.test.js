import React from 'react';
import renderer from 'react-test-renderer';
import Products from './Products';

it ("render when there are no items", () => {
    const tree =renderer.create(<Products />).toJSON()
    expect(tree).toMatchSnapshot();
})