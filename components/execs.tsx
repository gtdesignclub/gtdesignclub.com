import { ExecEntry } from "@/utils/types";
import { Marko_One } from "next/font/google";
import Image from "next/image";

type Props = {
  execs: ExecEntry[];
};

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

const Execs = ({ execs }: Props) => {
  return (
    <>
      <div id="execContainer" className="mt-16">
        <h1 className={`mb-5 ${markoOne.className}`}>Exec Board</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {execs
            .sort((a, b) => a.order - b.order)
            .map((e) => (
              <>
                <div className="mb-7">
                  <div className="relative w-60 h-60 mx-auto">
                    <Image
                      className="rounded-full border border-primary"
                      src={e.photo}
                      alt={e.name}
                      fill
                    />
                  </div>
                  <div className="w-4/5 mx-auto mt-2 py-3 rounded-md bg-primary text-center text-white">
                    <p className="font-bold">{e.name}</p>
                    <p className="font-thin">{e.major}</p>
                    <p className="mt-4">{e.position}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Execs;
