export default function Navbar() {
  return (
    <header className="shadow-md w-full flex justify-center font-semibold text-2xl fixed top-0 left-0">
      <div className="w-full max-w-4xl h-16 p-2 flex items-center justify-between">
        <div className="text-blue-500 cursor-pointer">Kudos Health</div>
        <ul>
          <li className="text-sm bg-blue-500 px-4 py-2 rounded-lg text-white cursor-pointer">Subscription</li>
        </ul>
      </div>
    </header>
  );
}
