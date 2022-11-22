import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { NextSeo } from 'next-seo';
import Container from '../../components/Generic/Container';
import Layout from '../../components/Generic/layout';
import { getPortfolioBySlug, getCompletePortfolio } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Article from '../../components/PortfolioSlugPage/Article';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const {
    title,
    image,
    date,
    content,
    description,
    slug,
    tags,
  } = post;
  const canonical = `https://tarugoswami.netlify.app/${slug}`;
  const { src, srcSet } = require(`../../images/portfolio/${image}?resize&sizes[]=250&sizes[]=500&sizes[]=800`);
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          images: [
            {
              url: `https://tarugoswami.netlify.app${src}`,
              alt: title,
            },
            {
              url: 'https://tarugoswami.netlify.app/taru.jpg',
              width: 800,
              height: 512,
              alt: 'Taru Goswami',
            },
            {
              url: 'https://tarugoswami.netlify.app/logo.png',
              alt: 'Taru Logo',
            },
          ],
          article: {
            publishedTime: date,
            tags,
          },
        }}
      />
      <Layout>
        <Container>
          {router.isFallback ? (
            <p>Loading...</p>
          ) : (
            <Article title={title} imgSrc={src} imgSrcSet={srcSet} date={date} content={content} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPortfolioBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'image',
    'description',
    'tags',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getCompletePortfolio(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
