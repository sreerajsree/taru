import { motion } from 'framer-motion';
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';
import PrintMarkdownHTML from '../Generic/PrintMarkdownHTML';

const variants = {
  hide: { x: 700, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function AboutText({ transition, image, content }) {
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  const { src, srcSet } = require(`../../images/${image}?resize&sizes[]=150&sizes[]=300&sizes[]=450`);
  return (
    <div ref={viewRef} className="w-full z-10 pb-10">
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className="pt-12 mt-5 md:mt-12 w-full bg-grey-custom px-7 md:px-10 pb-10 h-full z-10"
      >
        <h2 className="text-6xl font-title mb-2 md:mb-0">About Me</h2>
        <img
          src={src}
          srcSet={srcSet}
          alt="Taru Goswami"
          className="md:hidden object-cover mb-2 md:mb-2"
        />
        <PrintMarkdownHTML content={content} about />
      </motion.div>
    </div>
  );
}
