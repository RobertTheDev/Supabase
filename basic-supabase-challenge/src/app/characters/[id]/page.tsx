/* eslint-disable @next/next/no-img-element */
import { getCharacterById } from "./actions";

export default async function CharactersPage({
  params,
}: {
  params: { id: number };
}) {
  const character = await getCharacterById(params.id);

  return (
    <div>
      <img
        src={character?.imageUrl}
        className="h-96 object-cover w-96"
        alt="k"
      />
      <p>{character?.name}</p>
    </div>
  );
}
