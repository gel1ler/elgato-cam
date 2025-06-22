import HlsPlayer from "@/components/hls";

export default function Home() {
  return (
    <div className='flex flex-col items-center pt-5 gap-5'>
      <header className="w-screen h-10 px-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-2xl">El Gato</h1>
        <a href='https://elgatosalon.ru'>Перейти на наш сайт</a>
      </header>
      <HlsPlayer />
    </div>
  );
}
