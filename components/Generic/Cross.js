export default function Cross({ onClick }) {
  return (
    <div role="button" tabIndex={0} onClick={onClick} className="fixed md:hidden z-50 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center outline-none">
      <span className="bg-pink-custom w-10 h-[3px] transform rotate-45" />
      <span className="bg-pink-custom w-10 h-[3px] transform -rotate-45" style={{ marginTop: '-3px' }} />
    </div>
  );
}
