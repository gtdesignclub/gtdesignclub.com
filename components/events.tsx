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
        <h1 className={`mb-5 text-xl ${markoOne.className}`}>
          Upcoming Events
        </h1>
        <div id="previewEventContainer" className="col md:row">
          {previewEvent?.photo && (
            <Image
              src={`https:${previewEvent.photo.fields.file.url}`}
              alt={previewEvent.name}
              width={400}
              height={400}
            />
          )}
          <div className="w-full mt-3 p-4 border border-primary rounded-md">
            <h2 className="mb-2 text-lg font-bold">{previewEvent.name}</h2>
            <div className="row justify-start items-start mb-6">
              <p className="col w-1/5 pt-1 text-secondary text-xs">
                {`${dayjs(previewEvent.date).format("dddd").toUpperCase()}`}
                <span className="text-primary text-base font-bold">{`${dayjs(
                  previewEvent.date
                ).format("MM.DD")}`}</span>
              </p>
              <p className="col w-4/5 pl-2">{previewEvent.description}</p>
            </div>
            <div className="row justify-end">
              <div className="row justify-start w-4/5 text-white">
                {previewEvent.instagramLink && (
                  <Link
                    href={previewEvent.instagramLink}
                    className="mr-2 py-1 min-w-[6.5rem] rounded-md text-center bg-[#4A4A4A]"
                  >
                    Instagram
                  </Link>
                )}
                {previewEvent.facebookLink && (
                  <Link
                    href={previewEvent.facebookLink}
                    className="py-1 text-center min-w-[6.5rem] rounded-md bg-primary"
                  >
                    Facebook
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 border border-primary rounded-md">
          <table>
            <tbody>
              {tableEvents.map((e, idx) => (
                <tr key={idx} className="odd:bg-[#EDEDED]">
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
