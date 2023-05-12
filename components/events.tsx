import { EventEntry } from "@/utils/types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Marko_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(customParseFormat);

type Props = {
  events: EventEntry[];
};

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

const Events = ({ events }: Props) => {
  const [previewEvent, ...tableEvents] = events.sort(
    (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()
  );

  return (
    <>
      <div id="eventsContainer" className="mt-16">
        <h1 className={`mb-5 ${markoOne.className}`}>Upcoming Events</h1>
        <div id="previewEventContainer" className="col md:row">
          {previewEvent?.photo && (
            <div className="relative w-full md:max-w-[20rem] min-h-[16rem] mr-2 mb-3 md:mb-0">
              <Image
                className="rounded-md"
                src={previewEvent.photo}
                alt={previewEvent.name}
                fill
              />
            </div>
          )}
          <div className="w-full min-h-[16rem] p-4 border border-primary rounded-md">
            <h2 className="mb-2 font-bold">{previewEvent.name}</h2>
            <div className="row justify-start items-start mb-6">
              <p className="col w-1/5 lg:w-fit pt-1 lg:pt-0 text-secondary text-xs md:text-base lg:text-lg">
                {`${dayjs(previewEvent.date).format("dddd").toUpperCase()}`}
                <span className="text-primary text-base md:text-lg lg:text-xl font-bold">{`${dayjs(
                  previewEvent.date
                ).format("MM.DD")}`}</span>
              </p>
              <p className="col w-4/5 lg:ml-4 pl-2 lg:pl-0 whitespace-pre-line lg:text-xl">
                {previewEvent.description}
              </p>
            </div>
            <div className="row justify-end">
              <div className="row justify-start w-4/5 lg:w-fit lg:ml-[5.5rem] lg:mr-auto lg:text-lg text-white">
                {previewEvent.instagramLink && (
                  <Link
                    href={previewEvent.instagramLink}
                    className="mr-2 py-1 lg:py-2 lg:px-6 min-w-[6.5rem] button button-grey"
                  >
                    Instagram
                  </Link>
                )}
                {previewEvent.facebookLink && (
                  <Link
                    href={previewEvent.facebookLink}
                    className="py-1 lg:py-2 lg:px-6 text-center min-w-[6.5rem] button button-primary"
                  >
                    Facebook
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 border border-primary rounded-md overflow-x-auto">
          <table className="table-auto w-full">
            <tbody>
              {tableEvents.map((e, idx) => (
                <tr key={idx} className="text-lg odd:bg-[#EDEDED]">
                  <td className="p-2 text-secondary">
                    {dayjs(e.date).format("MM.DD")}
                  </td>
                  <td className="p-2 font-bold">{e.name}</td>
                  <td className="p-2">{e.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Events;
