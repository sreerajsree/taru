import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import ExternalLink from './ExternalLink';

const socials = [
  {
    id: 'twitter',
    Icon: FaTwitter,
    href: 'https://twitter.com/',
  },
  {
    id: 'linkedin',
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/tarugoswami/',
  },
  {
    id: 'instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/tarugoswami',
  },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-row items-center justify-center">
      {socials.map(({ id, Icon, href }) => (
        <ExternalLink key={`social-icon-${id}`} href={href} className="px-2 hover:text-pink-200">
          <Icon />
        </ExternalLink>
      ))}
    </div>
  );
}
