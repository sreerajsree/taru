import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PrintMarkdownHTML from '../../Generic/PrintMarkdownHTML';

describe('PrintMarkdownHTML', () => {
  test('it renders and matches snapshot', () => {
    const { asFragment } = render(<PrintMarkdownHTML content="<p>Hello World</p>" />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
