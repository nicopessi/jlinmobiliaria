import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";

const POSTS_QUERY = `*[
  _type == "casas"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, location, price, beths, rooms}`;  

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const Casas = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Casas</h1>
      <ul className="flex flex-col gap-y-4">
        {Casas.map((casas) => (
          <li className="hover:underline" key={casas._id}> 
            <Link href={`/${casas.slug.current}`}>
              <h2 className="text-xl font-semibold">Titulo: {casas.title}</h2>
              <h5>Localidad: {casas.location}</h5>
              <h3>Precio: U$D{casas.price}</h3>
              <h4>Baños: {casas.beths}</h4>
              <h5>Habitaciones: {casas.rooms}</h5>
              <p>{new Date(casas.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
