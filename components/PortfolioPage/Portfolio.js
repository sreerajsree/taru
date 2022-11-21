import { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import { calculateNumItemsOnRow } from '../../lib/utils';

export default function Portfolio({ articles }) {
  const [numItemsOnRow, setNumItemsOnRow] = useState(0);

  useEffect(() => {
    const num = calculateNumItemsOnRow(window.innerWidth);
    setNumItemsOnRow(num);
  }, []);
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center flex-1">
        {articles.map(({
          image,
          title,
          date,
          description,
          excerpt,
          slug,
        }, index) => {
          const onTopRow = index < numItemsOnRow;
          return (
            <PortfolioItem
              key={`portfolio-item-${title}`}
              onTopRow={onTopRow}
              title={title}
              image={image}
              date={date}
              description={description}
              excerpt={excerpt}
              slug={slug}
            />
          );
        })}
      </div>
    </section>
  );
}
