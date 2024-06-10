import type Character from "../interfaces/Character";
import sql from "../lib/postgres/db";

export async function getCharacters(): Promise<Character[]> {
  return await sql`
    select *
    from characters
  `;
}
