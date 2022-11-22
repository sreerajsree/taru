import { motion } from 'framer-motion';
import DateFormatter from '../Generic/DateFormatter';
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';
import Link from '../Generic/NoScrollLink';

export default function PortfolioItemText(props) {
  const { title, date, description, excerpt, transition, variants } = props;
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  return (
    <div ref={viewRef} className="w-full text-center flex">
      <motion.div
        initial="hideText"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className=" bg-pink-custom px-2 md:px-0 md:py-8 pt-6 pb-10 md:mx-4 md:min-h-1/2 flex items-center justify-center flex-col"
      >
        <h3 className="text-2xl m-2 md:mx-8 font-title">{title}</h3>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-title">
          <DateFormatter dateString={date} />
        </p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">
          {description}
        </p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">
          &apos;
          {excerpt}
          &apos;
        </p>
        <Link href={{ pathname: '/portfolio', query: { internalLink: true } }}>
          <a
            className="group relative inline-flex items-center overflow-hidden px-8 py-3 mt-6 md:mt-8 focus:outline-none border-solid border border-black font-body text-base hover:bg-black hover:text-pink-custom"
          >
            <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Go to Portfolio
            </span>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
