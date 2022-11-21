import EmailLink from './EmailLink';
import ExternalLink from './ExternalLink';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center flex-col font-body">
      <EmailLink className="p-4" />
      <SocialIcons />
      <p className="m-8 text-center">
        &copy; Designed by Ameira Yanni,
        <ExternalLink href="https://wallis.dev"> Created by James</ExternalLink>
      </p>
    </footer>
  );
}
