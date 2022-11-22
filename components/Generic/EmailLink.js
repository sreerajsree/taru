export default function EmailLink({ className }) {
  return (
    <div className="inline-flex">
      <a className={className} href="/">
        <h2 className="text-xl md:text-2xl">Taru Goswami </h2>
        <img src="/assets/butterfly.svg" className="h-7 w-7 ml-2 mr-3 animate-pulse" alt="logo" />
      </a>
    </div>
  );
}
