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
    projectsCount: 17,
    landAreaM2: 55_000,
    builtAreaM2: 120_000,
    unitsCount: 600,
};

export const socials = {
    phone: "+966 59 990 4086",
    whatsapp: "+966 59 990 4086",
};


export type ProjectStatus = "for_sale" | "under_construction" | "sold";

export interface LocalizedText {
    ar: string;
    en: string;
}

export interface Project {
    id: string;
    date: string;
    status: ProjectStatus;
    title: LocalizedText;
    location: LocalizedText;
    shortDescription: LocalizedText;
    description: LocalizedText;
    gallery: string[];
    internalPhotos: string[];           // ✅ NEW
    internalVideo?: string;             // ✅ NEW - for internal project videos

    video?: string;
    coordinates: { lat: number; lng: number };     // ✅ NEW

}

export const projects: Project[] = [
    {
        id: "p-01",
        date: "2024-01-01",
        status: "sold", // تم البيع
        coordinates: { lat: 24.7136, lng: 46.6753 }, // TODO: update to exact site coordinates
        title: { ar: "الرمال", en: "Al Rimal" },
        location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" }, // TODO: update city/district
        shortDescription: {
            ar: "مشروع «الرمال» مشروع سكني متكامل يضم وحدات سكنية مصممة بعناية، يجمع بين الراحة وجودة التفاصيل وسهولة الوصول. تم بيع المشروع بالكامل.",
            en: "Al Rimal is a thoughtfully planned residential development of well-designed housing units, combining comfort, quality finishing, and convenient access. The project is fully sold out.",
        },
        description: {
            ar: `
يقدّم **مشروع «الرمال»** تجربة سكنية هادئة ومتكاملة؛ صُمِّم ليُلائم احتياجات العائلة، ويوازن بين الخصوصية، جودة التشطيبات، وسلاسة الحركة اليومية.

**نوع المشروع:** وحدات سكنية (مشروع سكني).  
**حالة المشروع:** **تم البيع بالكامل**.

#### ما يميّز «الرمال»
- **تصميم عملي** يراعي الاستخدام اليومي، مع مساحات مريحة وتوزيع ذكي للغرف.
- **واجهات وتشطيبات منتقاة** تمنح إحساسًا بالفخامة دون مبالغة، مع اهتمام واضح بالتفاصيل.
- **بيئة سكنية هادئة** مناسبة للعائلات، تعزز الشعور بالأمان والسكينة.
- **موقع يسهل الوصول إليه** يدعم نمط الحياة اليومي ويقلل وقت التنقل.

في «الرمال» ركّزنا على بناء سكن يُشعرك بالاستقرار منذ اليوم الأول: تفاصيل محسوبة، هوية معمارية متوازنة، وتجربة سكنية تُلبي توقعات من يبحث عن جودة حقيقية.
      `,
            en: `
**Al Rimal** offers a calm, well-rounded living experience—designed around family needs, balancing privacy, quality finishing, and smooth everyday flow.

**Project type:** Residential housing units.  
**Project status:** **Sold out**.

#### Key highlights
- **Practical layouts** built for daily life, with comfortable proportions and smart room distribution.
- **Curated façades and finishes** that feel premium without excess, with clear attention to detail.
- **Family-friendly atmosphere** that supports a sense of comfort and peace of mind.
- **Convenient access** that fits daily routines and helps reduce commute time.

With Al Rimal, the focus is simple: a home that feels right from day one—considered details, a balanced architectural identity, and a residential experience built around real quality.
      `,
        },
        gallery: ["/projects/p-1.JPG"],
        internalPhotos: [],
    },
    {
        id: "p-02",
        date: "2024-07-01",
        status: "sold", // تم البيع
        coordinates: { lat: 24.7136, lng: 46.6753 }, // TODO: update to exact site coordinates
        title: { ar: "الجنادرية", en: "Al Janadriyah" },
        location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" }, // TODO: update city/district
        shortDescription: {
            ar: "مشروع «الجنادرية» مشروع سكني من وحدات سكنية متقنة التخطيط، يركّز على راحة الأسرة وجودة التنفيذ وتوازن المساحات. تم بيع المشروع بالكامل.",
            en: "Al Janadriyah is a residential project of well-planned housing units, focused on family comfort, execution quality, and balanced spaces. The project is fully sold out.",
        },
        description: {
            ar: `
يجسّد **مشروع «الجنادرية»** مفهوم السكن الذي يجمع بين بساطة التصميم وأناقة التفاصيل، ضمن بيئة مناسبة للعائلات، مع حرص واضح على جودة البناء والتشطيب.

**نوع المشروع:** وحدات سكنية (مشروع سكني).  
**حالة المشروع:** **تم البيع بالكامل**.

#### ملامح المشروع
- **مخططات مدروسة** تمنح الخصوصية وتخدم نمط الحياة اليومي.
- **جودة تنفيذ** ترتكز على تشطيبات عملية وعمر افتراضي طويل.
- **مساحات متوازنة** تمنح رحابة داخلية ومرونة في التأثيث.
- **هوية سكنية هادئة** تهتم براحة السكان وتفاصيل التجربة.

في «الجنادرية»، صنعنا مشروعًا يُشعرك أن كل تفصيلة وُضعت لتخدمك: بيت عملي، أنيق، ومريح… يليق بالعائلة ويستحق الثقة.
      `,
            en: `
**Al Janadriyah** reflects a residential concept that blends clean design with refined detailing—within a family-friendly setting, backed by a strong focus on build and finishing quality.

**Project type:** Residential housing units.  
**Project status:** **Sold out**.

#### Project highlights
- **Thoughtful layouts** that support privacy and everyday living.
- **High execution quality** with durable, practical finishing choices.
- **Balanced spaces** that feel open and furnish well.
- **A calm residential identity** built around comfort and livability.

At Al Janadriyah, every detail is intentional: a home that’s practical, elegant, and genuinely comfortable—built for families and worthy of trust.
      `,
        },
        gallery: ["/projects/p-2.JPG"],
        internalPhotos: [],
    },
    {
        id: "p-03",
        date: "1/7/2025",
        status: "for_sale", // للبيع
        coordinates: { lat: 24.8405072, lng: 46.8765448 }, // from Google Maps pin
        title: { ar: "الشروق", en: "Al Shorouq" },
        location: { ar: "الرياض", en: "Riyadh" },
        shortDescription: {
            ar: "مشروع «الشروق» وحدات سكنية بروح عصرية وخصوصية عالية، مصمّم ليمنح العائلة راحة يومية ومظهرًا أنيقًا وتشطيبات تعيش طويلًا. متاح الآن للبيع.",
            en: "Al Shorouq is a modern residential development offering high privacy, elegant architecture, and durable finishing—built for everyday family comfort. Available now for sale.",
        },
        description: {
            ar: `
**مشروع «الشروق»** هو عنوان للسكن العصري الذي يوازن بين الفخامة الهادئة والعملية اليومية. وحدات سكنية صُمّمت لتُشعرك بالاتساع، وتمنحك خصوصية أعلى، وتُبرز جمال التفاصيل دون تكلف.

**نوع المشروع:** وحدات سكنية (مشروع سكني).  
**حالة المشروع:** **للبيع**.

#### لماذا «الشروق» هو الخيار الأكثر جاذبية؟
- **واجهة عصرية أنيقة** تعكس هوية حديثة وتمنح انطباعًا راقيًا من اللحظة الأولى.
- **مخططات ذكية** تستثمر كل متر، وتوفّر انسيابية في الحركة ومساحات معيشة أكثر راحة.
- **تشطيبات منتقاة بعناية** تجمع بين الجمال والاعتمادية لتخدمك سنوات طويلة.
- **خصوصية أعلى** وتوزيع يراعي احتياجات الأسرة وتفاصيل نمط الحياة.
- **موقع مميز** يسهل الوصول إليه ويدعم روتينك اليومي.

إذا كنت تبحث عن بيت «يشبهك» — أنيق، عملي، ومريح — فـ«الشروق» صُمّم ليكون البداية التي تستحقها.
      `,
            en: `
**Al Shorouq** is designed for modern living—where quiet luxury meets everyday practicality. These residential units are planned to feel spacious, offer enhanced privacy, and showcase refined details without excess.

**Project type:** Residential housing units.  
**Project status:** **For Sale**.

#### Why Al Shorouq stands out
- **Elegant contemporary façade** that delivers a premium first impression.
- **Smart layouts** that maximize usable space and create smoother daily flow.
- **Carefully selected finishes** that blend aesthetics with long-term durability.
- **Enhanced privacy** with a family-first distribution of spaces.
- **A convenient location** that supports daily routines and easy access.

If you want a home that feels truly yours—stylish, practical, and comfortable—Al Shorouq is built to be that next step.
      `,
        },
        gallery: [
            "/projects/p-3/Retouch_20251127_123237_0.png",
            "/projects/p-3/Retouch_20251127_123306_0.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.24.12 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.24.36 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.25.05 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.25.59 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.27.12 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.28.48 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.42.58 AM.png",
            "/projects/p-3/Screenshot 1447-06-06 at 11.43.54 AM.png"
        ],
        internalPhotos: [],
        internalVideo: "/projects/p-3/videos/p3_v1.mp4",
        video: "/projects/p-3/videos/p3_v0.mp4",
    },
];

// app/lib/demo-data.ts
//
// export const partners = [
//     {
//         id: "greenpipes",
//         name: "Green Pipes",
//         logo: "/partners/green_pipes.png",
//         url: "#",
//     },
//     {
//         id: "foreach",
//         name: "Foreach",
//         logo: "/partners/foreach_logo.png",
//         url: "#",
//     },
//     {
//         id: "municipality",
//         name: "Municipality",
//         logo: "/partners/municipality.svg",
//         url: "#",
//     },
//     {
//         id: "malath",
//         name: "Malath",
//         logo: "/partners/malath.svg",
//         url: "#",
//     },
//     {
//         id: "alrajhy",
//         name: "Al Rajhy Bank",
//         logo: "/partners/bank_elrajhy.svg",
//         url: "#",
//     },
//     {
//         id: "alfanar",
//         name: "Alfanar",
//         logo: "/partners/alfanar-logo.svg",
//         url: "#",
//     },
// ];

/* ------------------------------------------------------------------
   Only the partners array was changed; all other exports unchanged
------------------------------------------------------------------ */
export const partners = [
    { id: "pr1", logo: "/partners/pr1.svg" },
    { id: "pr2", logo: "/partners/pr2.svg" },
    { id: "pr3", logo: "/partners/pr3.svg" },
    { id: "pr4", logo: "/partners/pr4.svg" },
    { id: "foreach", logo: "/foreach_logo.png" },
    { id: "pr5", logo: "/partners/pr5.svg" },
    { id: "pr6", logo: "/partners/pr6.svg" },
    { id: "pr7", logo: "/partners/pr7.svg" },
    { id: "pr8", logo: "/partners/pr8.svg" },
    { id: "pr9", logo: "/partners/pr9.svg" },
];


