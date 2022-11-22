import Link from './NoScrollLink';

export default function ReadMore({ slug, className: propClasses }) {
  return (
    <Link
      as={`/portfolio/${slug}`}
      href={{ pathname: '/portfolio/[slug]', query: { internalLink: true } }}
    >
      <a
        className={`group relative inline-flex items-center overflow-hidden border-solid border px-10 py-3 focus:outline-none  ${propClasses}`}
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
        <span className="text-sm font-medium transition-all group-hover:mr-4">Read more</span>
      </a>
    </Link>
  );
}
