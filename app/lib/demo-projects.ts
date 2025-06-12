

export interface Project {
    id: string;
    title: string;
    location: string;
    short: string;
    area: string;          // e.g. "20 000 m²"
    status: "ongoing" | "completed";
    cover: string;         // hero image
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: "p-01",
        title: "مجمع الياسمين السكني",
        location: "شمال الرياض",
        short: "مجمع عصري متكامل يشمل حدائق ومناطق ترفيهية لعائلة تنبض بالحياة.",
        area: "25 000 m²",
        status: "ongoing",
        cover: "/projects/fake1.jpg",
        gallery: ["/projects/fake1.jpg", "/projects/fake2.jpg"],
    },
    {
        id: "p-02",
        title: "برج السحاب التجاري",
        location: "وسط جدة",
        short: "برج مكاتب ذكي من 25 طابقًا، صُمم لبيئة عمل مرنة للشركات.",
        area: "18 000 m²",
        status: "completed",
        cover: "/projects/fake4.jpg",
        gallery: ["/projects/fake4.jpg"],
    },
    {
        id: "p-03",
        title: "مركز الريان الطبي",
        location: "المدينة المنورة",
        short: "منشأة طبية حديثة توفّر رعاية شاملة بمعايير عالمية.",
        area: "12 500 m²",
        status: "ongoing",
        cover: "/projects/fake5.jpg",
        gallery: ["/projects/fake5.jpg"],
    },
    {
        id: "p-04",
        title: "مول البستان",
        location: "جنوب الرياض",
        short: "مجمع تجاري وترفيهي يضم متاجر عالمية ومطاعم ومناطق لعب.",
        area: "30 000 m²",
        status: "completed",
        cover: "/projects/fake6.jpg",
        gallery: ["/projects/fake6.jpg", "/projects/fake2.jpg"],
    },
    {
        id: "p-05",
        title: "حي الندى الذهبي",
        location: "الدمام",
        short: "حي فاخر يضم فللًا عصرية ومسارات خضراء ونادٍ اجتماعي.",
        area: "40 000 m²",
        status: "ongoing",
        cover: "/projects/fake3.jpg",
        gallery: ["/projects/fake3.jpg", "/projects/fake5.jpg"],
    },
    {
        id: "p-06",
        title: "مجمع التقنية للأعمال",
        location: "الخبر",
        short: "منطقة أعمال ذكية للشركات الناشئة ورواد الأعمال.",
        area: "15 500 m²",
        status: "completed",
        cover: "/projects/fake1.jpg",
        gallery: ["/projects/fake1.jpg", "/projects/fake6.jpg"],
    },
];


