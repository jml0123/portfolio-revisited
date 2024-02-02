export interface SpotifyWidgetData {
    url: string;
    artist: string;
    track: string;
    playing: boolean,
    album: string,
    releaseDate: string,
    imageUrl: string,
    type: NowPlayingType,
}

enum NowPlayingType {
    Episode = "episode",
    Track = "track"
}