import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import ExternalLink from './ExternalLink';

const socials = [
  {
    id: 'twitter',
    Icon: FaTwitter,
    href: 'https://twitter.com/AmeiraYanni',
  },
  {
    id: 'linkedin',
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/ameira-yanni-4364b41ab/',
  },
  {
    id: 'instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/ameira.actor',
  },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-row items-center justify-center">
      {socials.map(({ id, Icon, href }) => (
        <ExternalLink key={`social-icon-${id}`} href={href} className="px-2">
          <Icon />
        </ExternalLink>
      ))}
    </div>
  );
}
