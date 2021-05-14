export interface game {
  name: string;
  link?: string; // This is the link that must be moved to the backend
  genres?: Array<string>; // In order to start the game.
  url?: string; // url is the background image of the game
  mainPicture?: string;
  background?: string;
  icon?: Blob;
  path?: string;
}
