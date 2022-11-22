import { NextSeo } from 'next-seo';
import Container from '../components/Generic/Container';
import Layout from '../components/Generic/layout';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import Portfolio from '../components/HomePage/Portfolio';
import { getHomePage, getCompletePortfolio } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Instagram from '../components/Generic/Instagram';

export default function Index({ home, articles }) {
  const {
    title,
    tagline,
    heroBackgroundImage,
    content,
    aboutImageDesktop,
    aboutImageMobile,
  } = home;
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://ameira.me"
        openGraph={{
          url: 'https://ameira.me',
          title: 'Home',
        }}
      />
      <Layout>
        <Hero title={title} tagline={tagline} backgroundImage={heroBackgroundImage} />
        <Container>
          <About
            content={content}
            desktopImage={aboutImageDesktop}
            mobileImage={aboutImageMobile}
          />
          <Portfolio articles={articles} />
          <Instagram />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const home = getHomePage();
  const content = await markdownToHtml(home.content || '');

  const articles = getCompletePortfolio([
    'title',
    'date',
    'description',
    'slug',
    'image',
    'excerpt',
  ]);

  return {
    props: {
      home: {
        ...home,
        content,
      },
      articles,
    },
  };
}
