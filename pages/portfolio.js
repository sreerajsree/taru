import { NextSeo } from 'next-seo';
import Layout from '../components/Generic/layout';
import { getCompletePortfolio } from '../lib/api';
import Portfolio from '../components/PortfolioPage/Portfolio';

export default function Index({ articles }) {
  return (
    <Layout>
      <NextSeo
        title="Blog"
        description="Taru Goswami's Blog documenting works that she has crafted while working as either a content creator, actor or creative."
        canonical="https://tarugoswami.netlify.app/portfolio"
        openGraph={{
          url: 'https://tarugoswami.netlify.app/portfolio',
          title: 'Blog',
          description: 'Taru Goswami\'s Blog documenting works that she has crafted while working as either a content creator, actor or creative.',
        }}
      />
      <div className="pt-12 md:pt-24 text-center mb-4 md:mb-10">
        <h1 className="font-title text-7xl text-pink-custom mb-4">Blog</h1>
        <p className="font-body text-base mx-4 md:mx-16 lg:mx-32">
          They vary from personal blogs to commissioned articles – and everything in between.
          If you have any questions or would like to chat about a piece,
          please feel free to contact me.
        </p>
      </div>
      <Portfolio articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = getCompletePortfolio([
    'title',
    'date',
    'slug',
    'author',
    'image',
    'excerpt',
    'description',
  ]);

  return {
    props: { articles },
  };
}
