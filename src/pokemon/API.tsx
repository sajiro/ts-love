export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export async function getAll(): Promise<Pokemon[]> {
  return fetch("pokemon.json").then((resp) => resp.json());
}

export async function getByName(search: string): Promise<Pokemon[]> {
  const lcSearch = search.toLowerCase();
  return fetch("/pokemon.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((pokemon: Pokemon[]) => {
      /*    console.log(
        "pokemon ie",
        pokemon.filter(({ name }) => name.toLowerCase().includes(lcSearch))
      ); */
      return pokemon.filter(({ name }) =>
        name.toLowerCase().includes(lcSearch)
      );
    });
}
