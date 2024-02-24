import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white-200 h-fit w-screen">
      <div className="text-white-200/80 bg-black-100 flex justify-between px-[min(2vw)] text-[min(8vw)] font-normal ">
        Exp-choozoo
        <div className="animate-pulse text-[10vw] duration-700 hover:animate-none">
          .
        </div>
      </div>
      <div className="bg-black-100 flex justify-center px-[min(16vw)] pb-[min(8vw)] pt-[min(5vw)]">
        <Image
          src={"/curtain1.jpeg"}
          alt="curtain"
          width={1200}
          height={1200}
        />
      </div>
      <div className="bg-black-100 flex justify-end py-[min(8vw)] text-[4vw]">
        <div className="text-white-200/60 hover:text-white-200/90 w-2/3 pr-[min(6vw)] text-right font-light duration-700">
          &quot;Sometimes you gotta close a door to open a window.&quot;
        </div>
      </div>
      <div className="bg-black-100 flex justify-start pl-[min(8vw)] pr-[min(28vw)] pt-[min(20vw)]">
        <Image
          src={"/blackTShirts.jpeg"}
          alt="curtain"
          width={900}
          height={900}
          className="grayscale duration-1000 hover:grayscale-0"
        />
      </div>
      <div className="text-white-200/90 bg-black-100 flex flex-col justify-center pl-[min(8vw)] pr-[min(8vw)] pt-[min(4vw)] text-[2vw] font-thin">
        <div>
          My favorite color is black cuz it can&apos;t be stained with any color
          and it can paint out any color.
        </div>
        <div>
          I&apos;m not into fashion, but I like design. I wear the same shoes
          every day.
        </div>
      </div>
      <div className="bg-black-100 text-white-200/90 flex flex-col justify-center pb-[min(10vw)] pt-[min(20vw)] text-[2vw] font-thin">
        <div className="pl-[min(2vw)]">I like repeated structure.</div>
      </div>
    </main>
  );
}
