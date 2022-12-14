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
          description:
            "Taru Goswami's Blog documenting works that she has crafted while working as either a content creator, actor or philocalist.",
        }}
      />
      <div className="pt-12 md:pt-24 text-center mb-4 md:mb-10">
        <h1 className="font-title text-7xl text-pink-custom mb-4">Blog</h1>
        <p className="font-body text-base mx-4 md:mx-16 lg:mx-32">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever
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
