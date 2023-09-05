export class SchedulingSaveAppDto {
    idScheduling: number;
    needTransport: boolean;
    isSpecial: boolean | null;
    companion: boolean | null;
    idTransport: number | null;
}