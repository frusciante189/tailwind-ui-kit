export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div>navbar</div>
      <div className="flex flex-1 items-center justify-center my-8">main</div>
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 p-6 flex bg-red-200">
        options
      </div>
      <div>footer</div>
    </main>
  );
}
