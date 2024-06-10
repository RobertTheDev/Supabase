/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getCharacters } from "./actions";

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <div className="grid grid-cols-4 p-8">
      {characters.map((character) => {
        return (
          <Link
            href={`/characters/${character.id}`}
            key={character.id}
            className="flex flex-col items-center"
          >
            <div className="h-48 mb-4 overflow-hidden rounded-full w-48">
              <img
                className="h-full object-center	object-cover w-full"
                src={character.imageUrl}
                alt={character.name}
              />
            </div>
            <p> {character.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
