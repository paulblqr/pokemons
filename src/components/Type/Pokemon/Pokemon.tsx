import style from "../Type.module.scss";
import { Link } from "react-router-dom";
import { colors } from "utils/constants";

export default function Pokemon({ name, url }: { name: string; url: string }) {
  console.log(url);
  const extractId = (url: string) => {
    let numbers = url.replace(/[^0-9]/g, "");
    return numbers.slice(1, numbers.length);
  };

  return (
    <Link
      to={`/pokemon/${extractId(url)}`}
      key={name}
      className={style.Pokemon}
      style={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      }}
    >
      {name}
    </Link>
  );
}
