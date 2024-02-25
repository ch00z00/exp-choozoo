import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white-200 h-fit w-screen">
      <div className="text-white-200/80 bg-black-100 -mt-[min(2.9vw)] flex justify-between pr-[min(2vw)] text-[min(8vw)] font-normal ">
        Exp-choozoo
        <div className="animate-pulse text-[10vw] duration-700 hover:animate-none">
          .
        </div>
      </div>
      <div className="bg-black-100 flex justify-center px-[min(10vw)] pb-[min(8vw)] pt-[min(5vw)]">
        <Image
          src={"/curtain1.jpeg"}
          alt="curtain"
          width={1200}
          height={1200}
        />
      </div>
      <div className="bg-black-100 flex justify-center py-[min(8vw)] text-[3vw]">
        <div className="text-white-200/60 hover:text-white-200 px-[min(2vw)] text-center font-thin duration-700">
          &quot;Sometimes you gotta close a door to open a window.&quot;
        </div>
      </div>
      <div className="bg-black-100 flex justify-start pl-[min(5vw)] pr-[min(30vw)] pt-[min(12vw)]">
        <Image
          src={"/blackTShirts.jpeg"}
          alt="blackTShirts"
          width={900}
          height={900}
          className="grayscale duration-1000 hover:grayscale-0"
        />
      </div>
      <div className="text-white-200/90 bg-black-100 flex flex-col justify-center pl-[min(5vw)] pr-[min(10vw)] pt-[min(4vw)] text-[2vw] font-thin">
        <div>
          My favorite color is black cuz it can&apos;t be stained with any color
          and it can paint out any color.
        </div>
      </div>
      <div className="text-white-200/90 bg-black-100 flex flex-col justify-center pl-[min(5vw)] pr-[min(8vw)] pt-[min(1vw)] text-[2vw] font-thin">
        <div>
          I&apos;m not into fashion, but I like design. I wear the same shoes
          every day.
        </div>
      </div>
      <div className="bg-black-100 flex justify-between py-[min(24vw)] pl-[min(24vw)]">
        <div className="bg-black-100 text-white-200/90 flex flex-col justify-start px-[min(4vw)] pb-[min(10vw)] text-[8vw]">
          Shape
          <div className="flex flex-col space-y-[4vw] px-[min(2vw)] pt-[min(2vw)] text-[2vw] font-thin">
            <div>
              Sharpness is a linear symbol that isolates color and space.
            </div>
            <div>
              The sharpness produced by straight lines and corners creates a
              stylish, elegant coolness.
            </div>
            <div>
              The sharpness of straight and angular shapes is enhanced when
              combined with curved shapes such as circles and curves.
            </div>
          </div>
        </div>
        <Image
          src={"/shape.jpg"}
          alt="shape"
          width={1700}
          height={1700}
          className="-mb-[min(4vw)] overflow-hidden pt-[min(8vw)]"
        />
      </div>
      <div className="bg-black-100 flex justify-center px-[min(12vw)] pt-[min(10vw)]">
        <Image
          src={"/structure.jpeg"}
          alt="structure"
          width={1700}
          height={1700}
        />
      </div>
      <div className="bg-black-100 text-white-200/90 -mt-[min(7vw)] flex flex-col justify-start px-[min(4vw)] pb-[min(20vw)] text-[14vw]">
        Structure.
        <div className="flex justify-between pl-[min(5vw)] pr-[min(2vw)] pt-[min(2vw)] text-[2vw] font-thin">
          <div>
            No matter how complex a structure is, the elements that make it up
            are simple.
          </div>
          <div className="pt-[min(6vw)] text-right">
            Those simple parts combine based on a certain continuity or pattern
            to create a beautiful organizational structure.
          </div>
        </div>
      </div>
    </main>
  );
}
