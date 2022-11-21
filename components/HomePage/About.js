import AboutImage from './AboutImage';
import AboutText from './AboutText';

const transition = {
  ease: 'easeOut',
  duration: 0.5,
};

export default function About({ content, desktopImage, mobileImage }) {
  const aboutImageDesktop = `home/${desktopImage}`;
  const aboutImageMobile = `home/${mobileImage}`;
  return (
    <section id="about">
      <div className="flex w-full my-0 md:py-32 flex-col md:flex-row">
        <AboutImage image={aboutImageDesktop} transition={transition} />
        <AboutText image={aboutImageMobile} transition={transition} content={content} />
      </div>
    </section>
  );
}
