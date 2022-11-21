import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import * as reactIntersectionObserver from 'react-intersection-observer';

import Article from '../../PortfolioSlugPage/Article';

jest.mock('react-use');
nextRouter.useRouter = jest.fn();
reactIntersectionObserver.useInView = jest.fn().mockReturnValue([]);

nextRouter.useRouter.mockImplementation(() => ({ route: '/', query: {} }));

const title = 'page title';
const image = 'image.jpg';
const date = '2019-10-10T00:00:00';
const content = '<p>content</p>';

describe('Hero', () => {
  test('renders and matches snapshot', () => {
    const { asFragment } = render(
      <Article title={title} image={image} date={date} content={content} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Check that the title, date and content are correctly rendered', () => {
    render(<Article title={title} image={image} date={date} content={content} />);
    expect(screen.getByText('page title')).toBeInTheDocument();
    expect(screen.getByText('October, 2019')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
