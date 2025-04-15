import { HeartIcon } from "lucide-react";

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center mx-auto justify-center">
      <HeartIcon size={100} className="fill-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
