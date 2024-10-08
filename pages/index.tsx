import NavBar from "@/components/ui/nav";
import PlaceholderImage from "@/assets/placeholder.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeInComponent from "@/components/fade-in";
import TableComponent from "@/components/table-component";

export default function Home() {
  return (
    <main className="mx-auto min-w-[100vw] min-h-[100vh]">
      <NavBar />

      <div className="w-full bg-[#fcebc8]">
        <div className="bg-[#fcebc8] px-[40px] py-[40px] pb-[40px] overflow-hidden w-full relative text-[#37371F] flex gap-5 flex-wrap items-center justify-center mx-auto">
          <div className="flex flex-col gap-5 items-center">
            <Image
              src={PlaceholderImage}
              alt="Splash"
              className="w-[300px] h-[300px]"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[30px] leading-[33px] title-font">
              Lorem ipsum
            </h1>
            <h1 className="text-[30px] leading-[33px] title-font text-[#8f5656]">
              amet consectetur adipisicing elit.
            </h1>
            <div className="max-w-[210px] flex flex-col gap-3 mt-[10px]">
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-start justify-start mx-auto p-[40px] py-[60px] max-w-[850px]">
        <h1 className="text-[30px] leading-[40px] title-font">How it works</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-[20px] leading-[30px]">
            1. Nobis eius commodi velit quasi libero unde dolorum vitae et.
          </h2>
          <h2 className="text-[20px] leading-[30px]">
            2. Laudantium modi perspiciatis voluptatum natus recusandae iste
            sunt eos inventore.
          </h2>
          <h2 className="text-[20px] leading-[30px]">3. Harum, reiciendis!</h2>
        </div>
      </div>
      <div style={{ height: "100vh" }} />
      <FadeInComponent />
      <div style={{ height: "100vh" }} />
      <TableComponent />
    </main>
  );
}
