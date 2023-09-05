export class QuizEvaluationAppDto {
    schedulingQuizID: number;
    questionID: number;
    title: string;
    step: number;
    options: any[] = [];
}