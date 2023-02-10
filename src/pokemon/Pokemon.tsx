import { useCallback, useEffect, useMemo, useState } from "react";
import { MemoedPokemonTable } from "./PokemonTable";
import { Pokemon, getByName } from "./API";

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

let appRender = 0;

export const PokemonComponent = () => {
  console.log(`appRender = ${appRender++}`);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const [search, setSearch] = useState("");
  const onSetSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setSearch(evt.target.value),
    []
  );

  useEffect(() => {
    getByName(search).then(setPokemon);
  }, [search]);

  const pokemonWithPower = useMemo(
    () =>
      pokemon.map((p) => ({
        ...p,
        power: calculatePower(p),
      })),
    [pokemon]
  );

  console.log("--", pokemonWithPower);
  const [threshold, setThreshold] = useState(0);
  const onSetThreshold = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setThreshold(parseInt(evt.target.value, 10)),
    []
  );

  const countOverThreshold = useMemo(
    () => pokemonWithPower.filter((p) => p.power > threshold).length,
    [pokemonWithPower, threshold]
  );

  const min = useMemo(
    () => Math.min(...pokemonWithPower.map((p) => p.power)),
    [pokemonWithPower]
  );

  const max = useMemo(
    () => Math.max(...pokemonWithPower.map((p) => p.power)),
    [pokemonWithPower]
  );

  return (
    <div>
      <div className="top-bar">
        <div>Search</div>
        <input type="text" value={search} onChange={onSetSearch}></input>
        <div>Power threshold</div>
        <input type="text" value={threshold} onChange={onSetThreshold}></input>
        <div>Count over threshold: {countOverThreshold}</div>
      </div>
      <div className="two-column">
        <div style={{ height: 300, overflow: "auto" }}>
          <MemoedPokemonTable pokemon={pokemonWithPower} />
        </div>
        <div>
          <div>Min: {min}</div>
          <div>Max: {max}</div>
        </div>
      </div>
    </div>
  );
};
