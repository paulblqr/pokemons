import style from "./Type.module.scss";

import { fetchTypeInfos } from "actions/pokemons";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Pokemon from "./Pokemon/Pokemon";
export default function Type() {
  const { name } = useParams();

  const { data, isFetching } = useQuery({
    enabled: !!name,
    queryKey: ["type", name],
    queryFn: () => fetchTypeInfos(String(name)),
  });
  if (isFetching)
    return <div className={style.Loading}>Interrogating Professor Oak...</div>;
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Title}>{data?.name}/</div>
        <div className={style.PokemonWrapper}>
          {data?.pokemon.map((pokemon) => (
            <Pokemon
              key={pokemon.pokemon.name}
              name={pokemon.pokemon.name}
              url={pokemon.pokemon.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
