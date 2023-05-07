import * as contentful from "contentful";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_TOKEN) {
  throw new Error(
    `Missing env var(s) ${CONTENTFUL_SPACE_ID ? "" : "CONTENTFUL_SPACE_ID"}${
      CONTENTFUL_TOKEN ? "" : ", CONTENTFUL_TOKEN"
    }`
  );
}

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_TOKEN,
});

export default client;
