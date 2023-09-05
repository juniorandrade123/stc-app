export class Answer {
    id: number;
    createdAt: Date;
    description: string;
    score?: number;
    idSchedulingQuiz?: number;
    idQuestion?: number;
    anonymous: boolean = false;
}