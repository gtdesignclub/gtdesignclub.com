import client from "./contentful";
import { AboutEntry, EventEntry, ExecEntry, SocialEntry } from "./types";

export const getAbout = async (): Promise<AboutEntry> => {
  const data = await client.getEntries({ content_type: "about" });
  return data.items[0].fields as AboutEntry;
};

export const getSocials = async (): Promise<SocialEntry[]> => {
  const data = await client.getEntries({ content_type: "link" });
  return data.items.map((i) => i.fields as SocialEntry);
};

export const getEvents = async (): Promise<EventEntry[]> => {
  const data = await client.getEntries({ content_type: "event" });
  return data.items.map((i) => i.fields as EventEntry);
};

export const getExecs = async (): Promise<ExecEntry[]> => {
  const data = await client.getEntries({ content_type: "officers" });
  return data.items.map((i) => i.fields as ExecEntry);
};
