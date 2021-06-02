import {track} from './tracks.model';

export interface playlist {
    name: string;
    id: string;
    tracks?: Array<track>;
    image: string;
}
