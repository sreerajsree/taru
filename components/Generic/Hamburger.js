export default function Hamburger({ onClick }) {
  const hamburger = [];
  for (let i = 0; i < 3; i += 1) {
    hamburger.push(
      <span key={`hamburger-${i}`} className="bg-pink-custom w-8 h-1 my-1" />,
    );
  }

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="fixed md:hidden z-50 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center outline-none"
    >
      {hamburger}
    </div>
  );
}
