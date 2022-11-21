export default function ExternalLink({
  href, className, style, children,
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
