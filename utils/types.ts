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
  photo?: any;
  instagramLink?: string;
  facebookLink?: string;
};

export type ExecEntry = {
  name: string;
  photo: any;
  position: string;
  major: string;
  order: number;
};
