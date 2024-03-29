import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white-200 h-fit w-screen">
      <div className="text-white-200/80 bg-black-100 -mt-[min(3.5vw)] flex justify-between pr-[min(2vw)] text-[min(14vw)] font-normal ">
        Exp-chz
        <div className="animate-pulse pt-[min(8vw)] text-[8vw] duration-700 hover:animate-none">
          .
        </div>
      </div>
      <div className="bg-black-100 flex justify-center px-[min(8vw)] pb-[min(4vw)] pt-[min(60px,10vw)]">
        <Image
          src={"/curtain2.jpeg"}
          alt="curtain"
          width={1200}
          height={1200}
        />
      </div>
      <div className="bg-black-100 flex justify-center py-[min(5vw)] text-[3vw]">
        <div className="text-white-200/60 hover:text-white-200 px-[min(2vw)] text-center font-thin duration-700 hover:-my-[0.37vw] hover:text-[3.5vw]">
          &quot;Sometimes you gotta close a door to open a window.&quot;
        </div>
      </div>
      <div className="bg-black-100 flex items-start justify-between pl-[min(8vw)] pt-[min(14vw)]">
        <Image
          src={"/blackTShirts.jpeg"}
          alt="blackTShirts"
          width={900}
          height={900}
          className="pt-[8vw] grayscale duration-1000 hover:grayscale-0"
        />
        <div className="text-white-200 flex rotate-90 justify-between text-[14vw]">
          Color
        </div>
      </div>
      <div className="text-white-200/90 bg-black-100 flex flex-col justify-center pl-[min(8vw)] pt-[min(6vw)] text-[2vw] font-thin">
        <div>
          My favorite color is black cuz it can&apos;t be stained with any color
          and it can paint out any color.
        </div>
      </div>
      <div className="text-white-200/90 bg-black-100 flex flex-col justify-center pl-[min(8vw)] pt-[min(2vw)] text-[2vw] font-thin">
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
      <hr className="text-white-200/70 px-[min(10vw)]" />
      <div className="bg-black-100 text-white-200 flex justify-between pl-[min(4vw)] pt-[min(2vw)]">
        <div className="flex flex-col">
          <div className="text-[2.5vw]">Follow me</div>
          <Link
            href="https://www.instagram.com/sslleeeekk?utm_source=qr"
            target="_blank"
            className="animate-pulse pt-[min(0.5vw)] text-[1.8vw] font-thin tracking-wider underline-offset-4 hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com/ch00z00"
            target="_blank"
            className="animate-pulse text-[1.8vw] font-thin tracking-wider underline-offset-4 hover:underline"
          >
            GitHub
          </Link>
          <div className="text-white-200/80 mt-[18vw] px-[1vw] text-sm font-light">
            @2024 YUSUKE SEKI
          </div>
        </div>
        <div className="pt-[min(6vw)] text-[min(20vw)]">See ya!</div>
      </div>
    </main>
  );
}
