import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Container from '../../Generic/Container';

describe('Container', () => {
  test('it renders and matches snapshot', () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});
