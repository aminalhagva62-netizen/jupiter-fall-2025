import { Search } from "lucide-react";



export default function Header({query,setQuery}) {
  return (
    <header className="w-full bg-black px-6 py-4">
      <div className=" mx-auto flex max-w-7xl  gap-6 items-center  ">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <img src="images/Group5.png" alt="" />
          <p>FindMovies</p>
        </div>


        <div className="relative flex-1 ">
          <Search
            size={18}
            className="absolute left-3 top-2 text-gray-400"
          />
          <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search FindMovies"
            className="w-full rounded-md bg-white px-10 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    </header>
  );
}


