import PortfolioItem from './PortfolioItem';

export default function Portfolio({ articles }) {
  const [newestArticle] = articles;
  return (
    <section>
      <div className="flex flex-col items-center w-full mt-16 md:mt-32 mb-0 md:mb-16 font-title">
        <h2 className="text-6xl md:text-7xl mb-6 md:mb-10">Blog</h2>
        {[newestArticle].map(({
          title,
          image,
          date,
          description,
          excerpt,
        }, index) => (
          <PortfolioItem
            key={`portfolio-item-${title}`}
            invert={index % 2 === 1}
            title={title}
            image={image}
            date={date}
            description={description}
            excerpt={excerpt}
          />
        ))}
      </div>
    </section>
  );
}
