// lib/demo-data.ts


export const about =
    "تأسست شركة الثياب للتطوير العقاري لتقديم حلول سكنية وتجارية تلبي أعلى المعايير في المملكة العربية السعودية.";

export const goals = [
    "تحقيق ريادة في سوق التطوير العقاري مع حلول مبتكرة.",
    "بناء مجتمعات سكنية متكاملة ومستدامة.",
    "تعزيز الثقة والشفافية مع عملائنا وشركائنا.",
];

// lib/demo-data.ts
export const stats = {
    totalSalesLastYear: 750_000_000,   // 750 M SAR
    residentialUnits: 1_200,
    commercialUnits: 260,
    totalAreaSoldM2: 25_000_000        // 25 M m²
};

export type Project = {
    id: string;
    title: string;
    date: string;          // ISO `YYYY-MM-DD`
    location: string;
    shortDescription: string;
    description: string;
    gallery: string[]; // image URLs
    video?: string;    // optional video URL
};

export const projects: Project[] = [
    {
        id: "p-01",
        date : "2024-11-10",
        title: "مجمع الياسمين السكني",
        location: "شمال الرياض",
        shortDescription:
            "مجمع سكني متكامل بتصميم حديث يضم حدائق ومساحات للأنشطة العائلية.",
        description:
            "يُعد مجمع الياسمين أحد أبرز مشاريعنا السكنية في شمال الرياض، حيث يوفّر بيئة معيشية متكاملة تشمل مناطق خضراء، مساحات ترفيهية، وخدمات ذكية للأسر السعودية.",
        gallery: ["/projects/fake1.jpg", "/projects/fake2.jpg", "/projects/fake3.jpg"],
    },
    {
        id: "p-02",
        date : "2024-11-10",

        title: "برج السحاب التجاري",
        location: "وسط جدة",
        shortDescription:
            "برج تجاري فاخر يضم مكاتب إدارية ومساحات مرنة للشركات الناشئة.",
        description:
            "برج السحاب هو مشروع تجاري في قلب جدة، يمتد على 25 طابقًا ويضم مكاتب فاخرة، صالات اجتماعات ذكية، ومرافق حديثة لتلبية احتياجات بيئة العمل المتطورة.",
        gallery: ["/projects/fake4.jpg"],
        video: "/hero.mp4",
    },
    {
        id: "p-03",
        date : "2024-11-10",

        title: "مركز الريان الطبي",
        location: "المدينة المنورة",
        shortDescription:
            "مركز صحي متكامل يخدم المجتمع المحلي بأحدث تقنيات الرعاية الصحية.",
        description:
            "مركز الريان هو منشأة طبية حديثة في المدينة المنورة تشمل عيادات تخصصية، مختبرات، وصيدليات، ضمن بيئة متقدمة تضمن جودة وسلامة الخدمة الطبية.",
        gallery: ["/projects/fake5.jpg"],
    },
    {
        id: "p-04",
        date : "2024-11-10",

        title: "مول البستان",
        location: "جنوب الرياض",
        shortDescription:
            "مجمع تجاري عصري يحتوي على متاجر عالمية ومساحات ترفيهية.",
        description:
            "مول البستان هو وجهة تسوق وترفيه متكاملة تقدم تجربة فريدة من نوعها تشمل مطاعم، مقاهي، دور سينما، ومتاجر من أبرز العلامات التجارية العالمية.",
        gallery: ["/projects/fake6.jpg", "/projects/fake2.jpg"],
    },
    {
        id: "p-05",
        date : "2024-11-10",

        title: "حي الندى الذهبي",
        location: "الدمام",
        shortDescription:
            "حي سكني راقٍ يتضمن فلل حديثة ومرافق خدمية متكاملة.",
        description:
            "يمتد حي الندى الذهبي على مساحة واسعة في الدمام ويحتوي على وحدات سكنية فاخرة مع مسارات للمشي، نوادي اجتماعية، ومناطق للأطفال، بتصميم يجمع بين الخصوصية والراحة.",
        gallery: ["/projects/fake3.jpg", "/projects/fake5.jpg"],
    },
    {
        id: "p-06",
        date : "2024-11-10",

        title: "مجمع التقنية للأعمال",
        location: "الخبر",
        shortDescription:
            "منطقة أعمال ذكية مخصصة للشركات التقنية ورواد الأعمال.",
        description:
            "يوفر مجمع التقنية بنية تحتية رقمية عالية المستوى ومساحات عمل مشتركة للشركات الناشئة في مدينة الخبر، مع خدمات دعم، قاعات ابتكار، ومواقف ذكية.",
        gallery: ["/projects/fake1.jpg", "/projects/fake6.jpg"],
    },
];

export const partners = [
    { name: "Saudi Build Co.", logo: "/logo.png", url: "#" },
    { name: "Foreach", logo: "/foreach_logo.png", url: "#" },
    { name: "Vision 2030", logo: "/logo.png", url: "#" },
];
