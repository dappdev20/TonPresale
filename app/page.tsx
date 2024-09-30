// import Image from "next/image";
import "./globals.css";


export default function Home() {
  return (
    <div className="background">
      <div className="w-screen h-screen flex justify-center ">
      <main className="flex flex-col w-[40%] items-center text-white justify-center">
        <div className="flex gap-4">
          <img src="/images/logo.svg"></img>
          <label className="titleFont text-[27px]">Elluminex</label>
        </div>

        <div className="flex flex-col mt-6" style={{ lineHeight: 'normal'}}>
          <div className="titleFont text-[56px] text-center"><b>The Future of Defi</b> on</div>
          <div className="titleFont text-[56px] text-center">the TON blockchain</div>
        </div>

        <div className="flex flex-col mt-2">
          <div>
            <label className="titleFont text-[16px] text-center">Presale Launch Coming Soon!</label>
          </div>

          <div className="flex justify-center gap-4 mt-8 w-full">
            <img src="/images/twitter.png"></img>
            <img src="/images/medium.png"></img>
            <img src="/images/telegram.png"></img>
            <img src="/images/youtube.png"></img>
          </div>
        </div>
      </main>
      </div>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer> */}
    </div>
  );
}
