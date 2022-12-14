import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import ExternalLink from './ExternalLink';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center flex-col font-body">
      <div className="inline-flex p-10 text-base md:text-xl font-bold">
        <p>Taru Goswami</p>
        <img
          src="/assets/butterfly.svg"
          className="h-4 md:h-5 w-4 md:w-5 ml-2 mr-3 animate-pulse"
          alt="logo"
        />
      </div>
      <SocialIcons />
      <p className="m-8 text-center flex items-center text-sm md:text-base">
        <AiOutlineCopyrightCircle className="mx-2" />
        {new Date().getFullYear()}
        <p className="mx-2">Designed & Developed by</p>
        <ExternalLink
          className="text-pink-600"
          href="https://sreerajsree.vercel.app/"
        >
          Sreeraj S
        </ExternalLink>
      </p>
    </footer>
  );
}
