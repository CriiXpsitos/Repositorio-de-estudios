import { WidgetGrid } from "@/components/WidgetGrid";


export const metadata = {
 title: 'Este es la pagina de Main',
 description: 'Este es la pagina de Main',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="my-2 text-3xl text-center">Dasboard</h1>
      <h2 className="text-xl text-center">Informacion general</h2>
      <WidgetGrid />
      
    </div>
  );
}