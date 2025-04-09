import { SimpleWidget } from "@/components/SimpleWidget";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="my-2 text-3xl text-center">Dasboard</h1>
      <h2 className="text-xl text-center">Informacion general</h2>

      <div className="flex flex-warp p-2 justify-center items-center mx-auto">
        <SimpleWidget />
      </div>
    </div>
  );
}