import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';

import Footer from '../../Generic/Footer';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

describe('Footer', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
