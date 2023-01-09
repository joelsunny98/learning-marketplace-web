export interface LearnerApplication {
    id? : string;
    status? : string;
    learnerId? : string;
    courseId? : string | null;
    learnerName? : string;
    courseName? : string;
}