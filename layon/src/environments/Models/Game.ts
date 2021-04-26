export interface Game {
    name: string;
    link?: string;           // This is the link that must be moved to the backend
    genres?: Array<string>;  // In order to start the game.
    url?: string;            // url is the background image of the game
}