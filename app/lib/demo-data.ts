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

export const socials = {
    phone: "+966 50 123 4567",
    whatsapp: "+201009051798",
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

    video?: string;
    coordinates: { lat: number; lng: number };     // ✅ NEW

}

export const projects: Project[] = [
    /* ───────────────────────── p-01 ───────────────────────── */
    {
        id: "p-01",
        coordinates: { lat: 24.8265, lng: 46.7152 },     // ✅ NEW
        date: "2024-11-10",
        status: "sold",
        title: {
            ar: "مجمع الياسمين السكني",
            en: "Al-Yasmin Residential Compound",
        },
        location: { ar: "شمال الرياض", en: "North Riyadh" },
        shortDescription: {
            ar: "مجمع سكني متكامل بتصميم حديث يضم حدائق ومساحات للأنشطة العائلية.",
            en: "A fully-integrated community with modern design, gardens and family activity zones.",
        },
        description: {
            ar: `
يُعَد «مجمع الياسمين السكني» نقطة تحوّل في المشهد العمراني لشمال الرياض؛ فقد صُمِّم ليكون أكثر من حيّ سكني تقليدي، بل مجتمعًا حضريًّا متكاملاً يستجيب لاحتياجات الأسرة السعودية العصرية.

يمتد المشروع على مساحة تبلغ **420 ألف متر مربع** ويضم **580** وحدة سكنية تتنوع بين الفلل المستقلة، والفلل التوأم، ووحدات التاون هاوس. خُصِّص لكل منزل إطلالة خضراء؛ إمّا على الحدائق المركزية أو على المتنزهات الجانبية الهادئة. يبدأ انطباع الزائر من بوابة رئيسية تستلهم العمارة النجدية بخطوط معاصرة، تتصل بممشى مُشجَّر بطول 1.5 كم يربط جميع أركان المجمع.

في قلب المشروع تقع الساحة الرئيسة التي تحتضن مسجدًا يسع **800 مصلٍ**، بجوار مركز مجتمعي يضم صالة رياضية متعددة الاستعمالات، حضانة أطفال، مسرحًا مُصغّرًا، ومساحات عمل مشتركة. خُططت هذه المرافق لتكون القلب النابض للحياة اليومية بحيث يجد السكان كل ما يلبّي اهتماماتهم بلا حاجة إلى مغادرة بيئتهم.

بيئيًا، اعتمد المشروع مبدأ «المساحات الخضراء أولًا»؛ إذ خُصِّص **30 %** من إجمالي المساحة للمسطحات المزروعة. زُرعت **4 700** شجرة محلية مقاومة للجفاف وتدار بشبكة ريّ ذكية تُخفض استهلاك المياه بنسبة 35 %. أُدمج نظام طاقة شمسية على أسطح الفلل يغطي 15 % من احتياجات الكهرباء، ونُصبت محطات شحن للمركبات الكهربائية في المواقف المشتركة. وبفضل هذه المعايير نال المجمع تصنيف **Saudi Green Building 3 نجوم**.

شبكة الطرق الداخلية رُتِّبت لتقليل سرعة المركبات وتعزيز أولوية المشاة، مع كاميرات مراقبة واستشعار حركة عند المداخل تتكامل مع تطبيق ذكي يتيح للسكان التحكم في البوابات واستقبال الضيوف عن بُعد. وبتوافقه مع منصّتي «توكلنا» و«بلدي» تُدار جميع الخدمات الحكومية بسلاسة. هكذا يجمع «الياسمين» بين الخصوصية، الأمان، والتكنولوجيا الخضراء ليعيد تعريف جودة الحياة في العاصمة.
      `,
            en: `
**Al-Yasmin Residential Compound** is a transformational community in North Riyadh, conceived as far more than a conventional housing district.  
Covering **420,000 m²**, it offers **580** villas and townhouses, each oriented toward green vistas – whether a central parkland spine or quiet pocket gardens.

A contemporary Najdi-inspired gateway opens onto a **1.5-km** tree-lined promenade that stitches the entire masterplan together. At its midpoint sits the civic hub: a mosque for **800 worshippers**, flanked by a community centre with a multi-purpose gym, crèche, mini-theatre and co-working lofts — the social heart of everyday life.

Environmental thinking leads every decision. More than **30 %** of land is dedicated to landscaped green space; **4,700** drought-tolerant native trees are watered by a smart irrigation grid that cuts consumption by **35 %**. Rooftop solar arrays supply **15 %** of the compound’s power, while EV-charging bays serve every shared car-park. These efforts earned a **Saudi Green Building 3-Star** rating.

Internal streets are “pedestrian-first”, with traffic-calming geometry, motion-sensing CCTV and an app-based entry system that lets residents admit guests remotely. Seamless integration with the national *Tawakkalna* and *Balady* platforms streamlines public-service access. In short, Al-Yasmin delivers privacy, security and green tech in one harmonious neighbourhood redefining urban quality of life in Riyadh.
      `,
        },
        gallery: ["/projects/fake1.jpg", "/projects/fake2.jpg", "/projects/fake3.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ]

    },

    /* ───────────────────────── p-02 ───────────────────────── */
    {
        id: "p-02",
        date: "2024-11-10",
        status: "for_sale",
        coordinates: { lat: 21.5433, lng: 39.1728 },
        title: { ar: "برج السحاب التجاري", en: "Al-Sahab Commercial Tower" },
        location: { ar: "وسط جدة", en: "Downtown Jeddah" },
        shortDescription: {
            ar: "برج تجاري فاخر يضم مكاتب إدارية ومساحات مرنة للشركات الناشئة.",
            en: "A 25-storey landmark offering premium offices plus flexible space for start-ups.",
        },
        description: {
            ar: `
«برج السحاب التجاري» تحفة معمارية ترتفع خمسةً وعشرين طابقًا مقابل كورنيش جدة، بخطوط مستوحاة من تموّج مياه البحر الأحمر. تبلغ مساحته التأجيرية **42,000 م²** ويضم طوابق مكتبية تنفيذية بإطلالة بانورامية على البحر، وأخرى مرنة تُهيَّأ للشركات الناشئة وحاضنات الأعمال.

يستقبل الزائرَ ردهة بارتفاع دورين مكسوّة برخام ترافرتين إيطالي، تتدفق إليها الإضاءة الطبيعية عبر واجهة زجاجية مزدوجة مزوّدة بزجاج كهروضوئي يُعدّل شفافيته تلقائيًا، ما يقلل استهلاك التبريد بنسبة 18 %. في السطح قاعة اجتماعات بانورامية تتسع لـ 120 ضيفًا، تحيط بها شرفة بزاوية 360° تُستخدم للفعاليات الراقية.

يخدم البرج **10** مصاعد عالية السرعة، وثلاثة أدوار قبو تستوعب **460** مركبة مع 40 محطة شحن كهربائية. يدير نظام BMS متكامل الإضاءة والتهوية والطاقة، ويدعم تأجير المساحات مكتبيًا بنظام “المكتب كخدمة”. وقد نال المشروع جائزة «أفضل مشروع تجاري مكتمل في الشرق الأوسط 2024» من مجلة *ME Construction*.
      `,
            en: `
**Al-Sahab Commercial Tower** rises 25 floors opposite the Jeddah Corniche, its rippling façade echoing the Red Sea.  
With **42,000 m²** of leasable area, the tower combines executive sky-view suites with flexible floors tailor-made for incubators and start-ups.

A double-height lobby clad in Italian travertine welcomes visitors beneath a dual-skin glass curtain-wall whose electro-chromic panes self-tint to trim cooling loads by **18 %**. At rooftop level, a 120-seat panoramic boardroom opens onto a 360-degree terrace — the perfect stage for signature events.

Ten high-speed lifts serve tenants, while three basement decks hold **460** cars and **40** EV chargers. A fully integrated BMS harmonises lighting, HVAC and energy, enabling “office-as-a-service” leasing. The tower captured *ME Construction*’s **“Best Completed Commercial Project 2024”** award and is already home to blue-chip corporates and tech disruptors alike.
      `,
        },
        gallery: ["/projects/fake4.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ],
        video: "/hero.mp4",
    },

    /* ───────────────────────── p-03 ───────────────────────── */
    {
        id: "p-03",
        date: "2024-11-10",
        coordinates: {  lat: 24.4710, lng: 39.6122 },
        status: "under_construction",
        title: { ar: "مركز الريان الطبي", en: "Al-Rayyan Medical Center" },
        location: { ar: "المدينة المنورة", en: "Medina" },
        shortDescription: {
            ar: "مركز صحي متكامل يخدم المجتمع المحلي بأحدث تقنيات الرعاية الصحية.",
            en: "An integrated healthcare hub equipped with state-of-the-art medical technology.",
        },
        description: {
            ar: `
يُقدّم «مركز الريان الطبي» معيارًا جديدًا للرعاية الصحية الشاملة في المدينة المنورة. يمتد على **22 ألف م²** ويشمل **14** عيادة تخصصية، قسم طوارئ يعمل 24 ساعة، وجناح جراحات اليوم الواحد بست غرف عمليات مزوّدة بالروبوت الجراحي والمنظار ثلاثي الأبعاد.

يعتمد المركز نظام تسجيل ذاتي ببطاقة الهوية والتأمين مترابط مع إدارة صفوف ذكية ترسل إشعارات فورية عبر تطبيق الهواتف. يحوي المختبر المرجعي ذراعًا روبوتية لنقل العينات تلقائيًا، فيما يضم قسم الأشعة جهاز MRI بقوة 3 تسلا وجهاز CT بدقة 640-slice. تُخزَّن البيانات سحابيًا بمعيار HIPAA وتُتبادل مع المستشفيات المجاورة آنياً.

يضم المبنى حدائق شفاء داخلية تعتمد تصميم Biophilic بأشجار ونوافير تحت سقف زجاجي مزدوج يحجب الحرارة ويدخل الضوء الطبيعي. وفي الطابق العلوي نادٍ توعوي يقدم ورشًا مجانية حول التغذية والوقاية من الأمراض المزمنة، ما يجعل المركز محورًا صحيًا ومجتمعيًا رائدًا في المدينة.
      `,
            en: `
**Al-Rayyan Medical Center** sets a new benchmark for comprehensive healthcare in Medina.  
Spanning **22,000 m²**, it hosts **14** specialist clinics, a 24-hour emergency department, and a same-day surgery wing with six robotic and 3-D laparoscopic theatres.

Self-service kiosks verify ID and insurance then synchronise with a smart queuing engine that notifies patients via mobile app. The reference laboratory features a robotic sample conveyor, while radiology boasts a 3-T MRI and a **640-slice** CT scanner. All data is cloud-hosted to HIPAA standards and exchanged seamlessly with regional hospitals.

Healing gardens embrace a biophilic interior courtyard where trees and fountains sit beneath a dual-glazed roof that filters heat yet floods the space with daylight. A wellness academy on the top floor offers free workshops on nutrition and chronic-disease prevention, making the center a genuine medical and community nucleus.
      `,
        },
        gallery: ["/projects/fake5.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ]
    },

    /* ───────────────────────── p-04 ───────────────────────── */
    {
        id: "p-04",
        date: "2024-11-10",
        status: "for_sale",
        coordinates: { lat: 21.5433, lng: 39.1728 },
        title: { ar: "مول البستان", en: "Al-Bustan Mall" },
        location: { ar: "جنوب الرياض", en: "South Riyadh" },
        shortDescription: {
            ar: "مجمع تجاري عصري يحتوي على متاجر عالمية ومساحات ترفيهية.",
            en: "A contemporary retail destination with global brands and immersive entertainment.",
        },
        description: {
            ar: `
يُطل «مول البستان» على الطريق الدائري الجنوبي كأحد أكبر وجهات التسوق والترفيه في الرياض، بمساحة تأجيرية تفوق **115,000 م²**. يتكون التصميم من ثلاثة أجنحة تُشبه بتلات زهرة تتلاقى عند قبة زجاجية قطرها 48 مترًا تشكل ساحة الفعاليات المركزية المضاءة ليلًا بألياف بصرية.

يضم المول **280** متجرًا لأشهر العلامات و**32** مطعمًا ومقهًى تطل على شرفة خارجية مزروعة بنخيل حقيقي بارتفاع 9 أمتار. الطابق الأرضي بنظام “متجر الشارع” الملائم للدراجات الصغيرة، بينما يستضيف الطابق العلوي مدينة ألعاب داخلية مساحتها 7,000 م² و**12** صالة سينما ‎4DX‎ مع أكبر شاشة IMAX في المنطقة الوسطى.

يتميز «ممر البستان الرقمي» التفاعلي بطول 60 مترًا بشاشات LED على الجدران والسقف تعرض واقعًا معززًا للطبيعة السعودية يستجيب لحركة الزوار. بيئيًا يعتمد المول محطة تبريد مركزي **12 000 RT** مع نظام استرجاع حرارة لتسخين المياه، ما يقلل الانبعاثات **22 %** ويمنحه شهادة **LEED Gold**.
      `,
            en: `
Overlooking Riyadh’s southern ring road, **Al-Bustan Mall** ranks among the kingdom’s largest retail-and-leisure hubs with **115,000 m²** of GLA. Three petal-shaped wings converge beneath a 48-m glass dome that glows by night with fibre-optic constellations.

The mall houses **280** international stores and **32** restaurants fronting an alfresco terrace shaded by nine-metre date palms transplanted from Wadi Dawasir. A “street-store” concept animates the ground level for scooters, while upstairs a **7,000-m²** indoor theme-park and **12** 4DX auditoria include the region’s largest IMAX screen.

The 60-m-long “Digital Green Walk” surrounds visitors with LED walls and ceilings that respond to motion with AR scenes of Saudi flora and fauna. Sustainability is driven by a **12-000-RT** district-cooling plant with heat-recovery for hot-water, trimming carbon by **22 %** and earning **LEED Gold** — the first retail centre in South Riyadh to do so.
      `,
        },
        gallery: ["/projects/fake6.jpg", "/projects/fake2.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ]
    },

    /* ───────────────────────── p-05 ───────────────────────── */
    {
        id: "p-05",
        date: "2024-11-10",
        status: "sold",
        coordinates: {lat: 24.6305, lng: 46.7128  },
        title: { ar: "حي الندى الذهبي", en: "Al-Nada Gold District" },
        location: { ar: "الدمام", en: "Dammam" },
        shortDescription: {
            ar: "حي سكني راقٍ يتضمن فلل حديثة ومرافق خدمية متكاملة.",
            en: "A premium residential district of modern villas and full lifestyle amenities.",
        },
        description: {
            ar: `
يمتد «حي الندى الذهبي» على مساحة تقارب **1.1 مليون م²** غرب الدمام، ويشتمل على **760** فيلا وبنايات منخفضة الارتفاع بواجهات حجرية تمزج الرخام الأبيض بالحجر الرملي الذهبي.

صُمِّمت شبكة الطرق وفق مفهوم «الحي خمس دقائق»؛ إذ تبعد أي نقطة أقل من خمس دقائق سيرًا عن أقرب حديقة أو متجر. وتتضمن المرافق ممشى دائريًا 2.3 كم، مسارات دراجات، منطقتي تمارين هوائية، ونادٍ اجتماعي.

لتعزيز الخصوصية، تستخدم البوابات تقنية ANPR للتعرّف على لوحات السيارات مع رموز دعوة للضيوف عبر تطبيق خاص. وجرى تركيب نظام نفايات تحت الأرض يمنع الروائح ويوفر مساحات الأرصفة، بينما يتم فصل المخلفات داخل الفلل لصندوقَيْ تفريغ هوائي مركزي.

يُنفَّذ «برنامج البصمة الخضراء» حيث يُزرَع لكل مالك فيلا شجرة مانغروف في جازان، تُتابَع نموّها بالأقمار الصناعية، ما يعزز الوعي البيئي ويخفض الانبعاثات. ونال المشروع جائزة «أفضل مجتمع سكني واعد في مجلس التعاون 2025» من *Forbes Living*.
      `,
            en: `
Covering almost **1.1 million m²** west of Dammam, **Al-Nada Gold District** offers **760** villas plus low-rise apartment blocks clad in a modern mix of white marble and golden sandstone.

Its “Five-Minute Neighbourhood” street plan ensures every home lies within a five-minute walk of a park, grocery or recreation spot. Amenities include a **2.3-km** looped promenade, cycle tracks, two outdoor aerobics zones and a social clubhouse.

Entry gates use ANPR plate recognition with guest e-passes via a residents’ app, while an underground vacuum waste system eliminates odours and frees pavement space. Dual-chute recycling in each villa feeds the central plant.

A “Green Footprint” scheme gifts each homeowner a mangrove tree in Jazan; satellite tracking lets families watch their tree grow — an engagement that cuts net CO₂ and builds environmental pride. The development secured *Forbes Living*’s **“Most Promising GCC Residential Community 2025”** award.
      `,
        },
        gallery: ["/projects/fake3.jpg", "/projects/fake5.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ]
    },

    /* ───────────────────────── p-06 ───────────────────────── */
    {
        id: "p-06",
        date: "2024-11-10",
        status: "under_construction",
        coordinates: {lat: 24.6305, lng: 46.7128  },
        title: { ar: "مجمع التقنية للأعمال", en: "Tech-Hub Business Park" },
        location: { ar: "الخبر", en: "Khobar" },
        shortDescription: {
            ar: "منطقة أعمال ذكية مخصصة للشركات التقنية ورواد الأعمال.",
            en: "A smart business park tailored for tech firms and entrepreneurs.",
        },
        description: {
            ar: `
يُعد «مجمع التقنية للأعمال» في الخبر أول مجمّع متخصص لاستقطاب الشركات التقنية الناشئة بالمنطقة الشرقية. يمتد على **180 ألف م²** ويضم **10** مبانٍ مكتبية ذكية، معامل نماذج أولية للطباعة ثلاثية الأبعاد، ومساحات عمل مشتركة بنظام اشتراك مرن.

تربط ألياف ضوئية بسرعة **10 Gbps** بين مبانيه التي تحوي مراكز بيانات فرعية (Edge) تشغَّل بالطاقة الشمسية بإجمالي **4 MW**. يتعاون المجمع مع جامعة الملك فهد لإدارة مسرّع أعمال وصندوق استثماري بقيمة **150 مليون ريال**.

يشمل المجمع وحدات إقامة فندقية للوفود، مركز لياقة 24/7، و**14** مطعمًا. ويعمل موقف ذكي متعدد الطوابق بنظام توجيه ضوئي يقلل زمن البحث عن الموقف **60 %**. وقد اعتُمدت المنطقة حرة لتسهيل استيراد الأجهزة في مراحل البحث والتطوير، ما جعل «مجمع التقنية» وجهة أولى لشركات علوم البيانات والأمن السيبراني في الخليج.
      `,
            en: `
**Tech-Hub Business Park** in Khobar is the Eastern Province’s first campus purpose-built to attract tech start-ups.  
Spread across **180,000 m²**, it comprises **10** smart office blocks, 3-D prototyping labs and subscription-based co-working lofts.

A **10-Gbps** fibre backbone links edge data centres on each roof, powered by **4-MW** of rooftop solar. In partnership with KFUPM, the park hosts an accelerator and a **SAR 150 million** venture fund.

Amenities span short-stay hotel suites, a 24-hour fitness centre and **14** cafés and restaurants. A multi-storey smart garage with LED guidance slashes parking hunt-time by **60 %**. Certified as a free-zone for R-and-D imports, Tech-Hub has become a magnet for data-science and cyber-security firms across the Gulf.
      `,
        },
        gallery: ["/projects/fake1.jpg", "/projects/fake6.jpg"],
        internalPhotos: [
            "/projects/internalPhotos1.jpg",
            "/projects/internalPhotos2.jpg",
            "/projects/internalPhotos3.jpg",
            "/projects/internalPhotos4.jpg"
        ],
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


