import {
    AboutEntry,
    EventEntry,
    ExecEntry,
    FetchArgs,
    SocialEntry,
} from "./types";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_TOKEN) {
  throw new Error(
    `Missing env var(s) ${CONTENTFUL_SPACE_ID ? "" : "CONTENTFUL_SPACE_ID"}${
      CONTENTFUL_TOKEN ? "" : ", CONTENTFUL_TOKEN"
    }`
  );
}

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master`;

export const assetURL = async (id: string) => {
  const data = await fetch(
    `${CONTENTFUL_URL}/assets/${id}?access_token=${CONTENTFUL_TOKEN}`
  );

  if (data.ok) {
    const asset = await data.json();
    return asset.fields.file.url;
  }
};

const fetcher = async (args: FetchArgs) => {
  const baseUrl = `${CONTENTFUL_URL}${
    args.asset_id ? `/${args.asset_id}` : ""
  }${args.content_type ? `/entries` : ""}?access_token=${CONTENTFUL_TOKEN}`;

  const res = await fetch(
    `${baseUrl}${args.content_type ? `&content_type=${args.content_type}` : ""}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getAbout = async (): Promise<AboutEntry> => {
  const data = await fetcher({ content_type: "about" });
  return data.items[0].fields as AboutEntry;
};

export const getSocials = async (): Promise<SocialEntry[]> => {
  const data = await fetcher({ content_type: "link" });
  return data.items.map((i: any) => i.fields as SocialEntry);
};

export const getEvents = async (): Promise<EventEntry[]> => {
  const data = await fetcher({ content_type: "event" });
  return data.items.map((i: any) => i.fields as EventEntry);
};

export const getExecs = async (): Promise<ExecEntry[]> => {
  const data = await fetcher({ content_type: "officers" });
  return data.items.map((i: any) => i.fields as ExecEntry);
};
