import style from "../Random/Random.module.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "actions/pokemons";
import { getTypeColor, adjustFontSize } from "utils/helpers";
import { useDebounceValue } from "utils/hooks";

export default function Pokemon() {
  const { id } = useParams();

  const { data, isFetched } = useQuery({
    enabled: !!id,
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(String(id)),
  });

  const backgroundColor = getTypeColor(data?.types?.[0].type.name);
  const isFetchedDelay = useDebounceValue(isFetched, 400);

  return (
    <div
      className={style.Container}
      style={{ backgroundColor: backgroundColor[0] }}
    >
      <div
        className={style.Wrapper}
        style={{ backgroundColor: backgroundColor[1] }}
      >
        {isFetchedDelay && (
          <>
            <audio autoPlay src={data?.cries["latest"]}></audio>
          </>
        )}

        <div className={style.Image}>
          <div className={style.Filter} />
          {data?.sprites?.other?.["official-artwork"].front_default ? (
            <img
              src={data?.sprites?.other["official-artwork"].front_default}
              alt="pokemon"
            />
          ) : null}
        </div>
        <div className={style.Content}>
          <div className={style.Text}>
            <div className={style.Types}>
              {data?.types?.map((type) => (
                <Link
                  to={`/type/${type.type.name}`}
                  className={style.Type}
                  key={type.slot}
                >
                  {type.type.name}
                </Link>
              ))}
            </div>
            <div
              className={style.Name}
              style={{ fontSize: adjustFontSize(data?.name) }}
            >
              {data?.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
