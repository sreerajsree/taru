import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hamburger from '../../Generic/Hamburger';

describe('Hamburger', () => {
  test('calls passed in function when the Cross is clicked', () => {
    const mockedOnClick = jest.fn();
    render(<Hamburger onClick={mockedOnClick} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockedOnClick.mock.calls.length).toBe(1);
  });
  test('has 3 children to make up the hamburger icon', () => {
    render(<Hamburger onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.children.length).toBe(3);
  });
});
