import PortfolioItemText from './PortfolioItemText';
import PortfolioItemImage from './PortfolioItemImage';

export default function PortfolioItem(props) {
  const {
    invert, title, image, date, description, excerpt,
  } = props;
  const flexDirection = (invert) ? 'md:flex-row-reverse' : 'md:flex-row';

  const xOffset = 700;
  const variants = {
    hideText: {
      x: (invert) ? xOffset : xOffset * -1,
      opacity: 0,
    },
    hideImage: {
      x: (!invert) ? xOffset : xOffset * -1,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };
  const transition = {
    ease: 'easeOut',
    duration: 0.5,
  };
  return (
    <div className={`flex mb-8 flex-col-reverse ${flexDirection}`}>
      <PortfolioItemText
        title={title}
        date={date}
        description={description}
        excerpt={excerpt}
        transition={transition}
        variants={variants}
      />
      <PortfolioItemImage
        title={title}
        image={image}
        transition={transition}
        variants={variants}
      />
    </div>
  );
}
