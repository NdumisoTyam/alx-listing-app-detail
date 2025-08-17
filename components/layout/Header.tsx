const Header = () => (
  <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">ALX Listing App</h1>
    <nav>
      <ul className="flex gap-4">
        <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Listings</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
