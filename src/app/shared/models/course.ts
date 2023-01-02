export interface Course {
    id? : string;
    title? : string;
    reference? : string;
    teaserImage? : string;
    subtitle? : string;
    overview? : string;
    type? : string;
    coursePrice? : string;
    category? : string;
    credits? : string;
    level? : string;
    deliveryMethod? : string;
    status? : string;
    publishStatus? : string;
    publishAt : Date;
    unpublishAt : Date;
    departmentId? : string;
    trainerId? : string;  
}