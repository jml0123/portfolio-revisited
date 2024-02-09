export enum EmbedType {
    BANDCAMP = "bandcamp",
    SOUNDCLOUD = "soundcloud"
}
export interface EmbedData {
    name: string;
    embedCode: string;
    releaseDate: number | string;
    externalLink?: string;
    type: EmbedType
}