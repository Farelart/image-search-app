import SearchForm from "@/components/SearchForm"
import CardList from "@/components/CardList"

type HomeProps = {
  searchParams: {q: string}
}

export default function Home({searchParams} : HomeProps) {
  const query = searchParams.q || "office"

  return (
    <main className="w-[80%] mx-auto mt-20 flex flex-col items-center gap-16">
      <h1 className="font-bold text-5xl">Image Search App</h1>
      <SearchForm />
      <CardList query={query}/>
    </main>
  )
}
