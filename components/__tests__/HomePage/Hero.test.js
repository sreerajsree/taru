import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from '../../HomePage/Hero';

jest.mock('react-use');

describe('Hero', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Hero title="Ameira Yanni" tagline={['copywriter', 'actor', 'creative']} backgroundImage="header-background.jpg" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Ameira Yanni is rendered', () => {
    render(<Hero title="Ameira Yanni" tagline={['copywriter', 'actor', 'creative']} backgroundImage="header-background.jpg" />);
    expect(screen.getByText('Ameira Yanni')).toBeInTheDocument();
  });
});
