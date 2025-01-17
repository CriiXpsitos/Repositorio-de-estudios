

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo desde otro layout</span>
        {children}
      </main>
    </>
  );
}
