import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';

import NavigationLink from '../../Generic/NavigationLink';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/', pathname: '/' }));

describe('NavigationLink', () => {
  test('a Scroll link is created as props.scrollTo is set and pathname matches the href', () => {
    const text = 'scrollTo link';
    const closeMenu = jest.fn();
    render(<NavigationLink closeMenu={closeMenu} text={text} scrollTo="about" href="/" external={false} />);

    const link = screen.getByText(text);
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute('href');
  });
  test('an External link is created as external is set to true', () => {
    const text = 'external link';
    const closeMenu = jest.fn();
    render(<NavigationLink closeMenu={closeMenu} text={text} href="/" external />);

    const link = screen.getByText(text);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  test('an internal (Nextjs) link is created as external is set to false', () => {
    const text = 'external link';
    const closeMenu = jest.fn();
    render(<NavigationLink closeMenu={closeMenu} text={text} href="/" external={false} />);

    const link = screen.getByText(text);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).not.toHaveAttribute('rel', 'noopener noreferrer');
  });
});
