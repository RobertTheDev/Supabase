import type Character from "@/app/interfaces/Character";
import sql from "../../lib/postgres/db";

export async function getCharacterById(id: number): Promise<Character | null> {
  const characters: Character[] = await sql`
    select *
    from characters
    where id = ${id}
  `;

  return characters[0] || null;
}
