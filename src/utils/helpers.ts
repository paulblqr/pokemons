export const getTypeColor = (type?: string) => {
  switch (type) {
    case "normal":
      return ["#BFCC94", "#A8A77A"];
    case "fire":
      return ["#f39959", "#F08030"];
    case "water":
      return ["#daeaf3", "#86BBD8"];
    case "electric":
      return ["#fade6e", "#FFCA3A"];
    case "grass":
      return ["#afdd93", "#7AC74C"];
    case "ice":
      return ["#dbe7f7", "#C4D7F2"];
    case "fighting":
      return ["#b16f77", "#90323D"];
    case "poison":
      return ["#c68cc6", "#a953a9"];
    case "ground":
      return ["#E0C068", "#BC8034"];
    case "flying":
      return ["#A98FF3", "#A890F0"];
    case "psychic":
      return ["#fbabc3", "#F95587"];
    case "bug":
      return ["#DCF2B0", "#9aa97b"];
    case "rock":
      return ["#cbbd72", "#bdaa4a"];
    case "ghost":
      return ["#c7bdf1", "#ab9dea"];
    case "dragon":
      return ["#7371FC", "#7038F8"];
    case "dark":
      return ["#D36135", "#A24936"];
    case "steel":
      return ["#8D98A7", "#B8B8D0"];
    case "fairy":
      return ["#ECC8AE", "#EE99AC"];
    default:
      return ["#fff3d9", "#fff1d0"];
  }
};

export const adjustFontSize = (name: string | undefined) => {
  if (!name) return "106px";
  if (name.length > 20) return "65px";
  if (name.length > 18) return "70px";
  if (name.length > 15) return "75px";
  if (name.length > 13) return "85px";
  if (name.length > 10) return "95px";

  return "106px";
};

export {};
