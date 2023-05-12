export type AboutEntry = {
  hero: string;
  description: string;
  dateTime: string;
  location: string;
};

export type SocialEntry = {
  platform: string;
  link: string;
};

export type EventEntry = {
  name: string;
  date: string;
  description: string;
  photo?: string;
  instagramLink?: string;
  facebookLink?: string;
};

export type ExecEntry = {
  name: string;
  photo: string;
  position: string;
  major: string;
  order: number;
};

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

type Either<T, U> = Only<T, U> | Only<U, T>;

export type FetchArgs = Either<{ content_type: string }, { asset_id: string }>;
