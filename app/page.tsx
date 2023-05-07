import Events from "@/components/events";
import Execs from "@/components/execs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { getAbout, getEvents, getExecs, getSocials } from "@/utils/queries";

const Home = async () => {
  const about = await getAbout();
  const socials = await getSocials();
  const events = await getEvents();
  const execs = await getExecs();

  return (
    <>
      <div className="p-8">
        <Header socials={socials} />
        <Hero socials={socials} {...about} />
        <Events events={events} />
        <Execs execs={execs} />
      </div>
      <Footer socials={socials} />
    </>
  );
};

export default Home;
