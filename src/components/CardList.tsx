type CardListProps = {
    query: string;
}

export default async function CardList({query}: CardListProps) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`)
  const data = await response.json()
  console.log(data)
  
  
  return (
    <section>
        <div className="grid grid-cols-3 gap-4">
            {data.results.map((image: any) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
                <img src={image.urls.regular} alt={image.alt_description} />
                <div className="p-4">
                    <h3 className="font-bold text-xl">{image.alt_description}</h3>
                    <p>By {image.user.name}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}
