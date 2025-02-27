"use client";

import { useRouter } from "next/navigation";

export default function SearchForm() {
/*   const [searchText, setSearchText] = useState("");
 */  
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* console.log(searchText); */
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    router.push(`/?q=${searchQuery}`);
  }


  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 justify-center">
        <input
            name="search"
            type="search"
            className="border border-gray-300 rounded-lg p-2 w-[50%] outline-none focus:ring-1 transition"
            placeholder="Search for images"
            /* value={searchText}
            onChange={(e) => setSearchText(e.target.value)} */
            spellCheck="false"
        />
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            Search
        </button>
    </form>
  )
}
