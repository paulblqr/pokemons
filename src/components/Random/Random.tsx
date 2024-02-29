import { useEffect, useState } from "react";
import style from "./Random.module.scss";
import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { fetchPokemon } from "actions/pokemons";
import { getTypeColor, adjustFontSize } from "utils/helpers";
import { useDebounceValue } from "utils/hooks";
import { Link } from "react-router-dom";

export default function Random() {
  const [randomId, setRandomId] = useState(
    String(Math.floor(Math.random() * 898) + 1)
  );
  const client = useQueryClient();

  const { data, isFetched, isFetching } = useQuery({
    queryKey: ["pokemon", randomId],
    queryFn: () => fetchPokemon(randomId),
    placeholderData: keepPreviousData,
  });

  const isFetchedDelay = useDebounceValue(isFetched, 400);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "r") {
        setRandomId(String(Math.floor(Math.random() * 898) + 1));
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [client]);

  const backgroundColor = getTypeColor(data?.types?.[0].type.name);

  if (isFetching) {
    return (
      <div
        className={style.Container}
        style={{ backgroundColor: backgroundColor[0] }}
      >
        <div
          className={style.Wrapper}
          style={{ backgroundColor: backgroundColor[1] }}
        ></div>
      </div>
    );
  }
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
          <div
            className={style.Hint}
            onClick={() =>
              setRandomId(String(Math.floor(Math.random() * 898) + 1))
            }
          >
            [<span>R</span>]
          </div>
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
