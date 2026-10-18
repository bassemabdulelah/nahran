import type { RouteId } from '../config/site';

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceLocale {
  /** Short title used in navigation and cards. */
  title: string;
  /** Unique <title>. */
  metaTitle: string;
  metaDescription: string;
  /** Primary on-page H1. */
  h1: string;
  keywords: string[];
  /** Lead paragraph(s) under the hero. */
  intro: string[];
  imageAlt: string;
  sections: ContentSection[];
  faqs: Faq[];
}

export interface Service {
  id: RouteId;
  slug: string;
  icon: string;
  image: string;
  related: RouteId[];
  ar: ServiceLocale;
  en: ServiceLocale;
}

/**
 * Content is written separately for Arabic and English — no literal
 * translation. All imagery is either an original asset supplied by the
 * owner or a clearly-marked placeholder; see docs/OWNER-INPUTS.md.
 */
export const SERVICES: Service[] = [
  {
    id: 'facades',
    slug: 'glass-facades',
    icon: 'facade',
    image: '/images/services/facades.svg',
    related: ['doors', 'partitions', 'railings'],
    ar: {
      title: 'واجهات زجاج سكريت',
      metaTitle: 'واجهات زجاج سكريت بالرياض | تفصيل وتركيب واجهات زجاج',
      metaDescription:
        'تفصيل وتركيب واجهات زجاج سكريت في الرياض للمحلات والمكاتب والمباني. تعرّف على اعتبارات التصميم والقياس والتركيب والعوامل المؤثرة في السعر.',
      h1: 'واجهات زجاج سكريت في الرياض',
      keywords: ['واجهات زجاج سكريت', 'تركيب واجهات زجاج بالرياض', 'تفصيل واجهات زجاج'],
      imageAlt: 'نموذج توضيحي لواجهة زجاجية بمقاسات وخطوط تصميم واضحة',
      intro: [
        'الواجهة الزجاجية هي أول ما يراه العميل، وهي في الوقت نفسه الجزء الأكثر تعرّضاً للشمس والرياح والأمطار. لذلك يجمع تصميم الواجهة بين الرؤية الجمالية للمبنى وبين الاعتبارات العملية في القياس والتوازن والتركيب.',
        'نفصّل ونركّب واجهات زجاج سكريت في الرياض للمحلات والمكاتب والمداخل حسب المساحة والتصميم المطلوب، مع توضيح الفرق بين الخيارات المختلفة قبل البدء حتى يكون القرار واضحاً.',
      ],
      sections: [
        {
          heading: 'أين تُستخدم الواجهات الزجاجية',
          list: [
            'واجهات محلات ومقاهي تسمح بمرور الضوء ورؤية ما داخلها.',
            'مداخل مكاتب وشركات حيث تكون الواجهة جزءاً من الهوية.',
            'واجهات معارض ومساحات عرض بحاجة إلى رؤية ثلاثة أبعاد.',
            'فواصل خارجية جزئية ومداخل مظللة.',
          ],
        },
        {
          heading: 'ما نراعيه في القياس والتصميم',
          paragraphs: [
            'اليست الواجهة مجرد لوح زجاج؛ بل منظومة من الألواح والإطارات والتثبيت. ولذلك نبدأ دائماً من القياس الفعلي للفتحة وارتفاعها، ثم نحدد كيفية توزيع الألواح والفواصل بينها.',
          ],
          list: [
            'الأبعاد الحقيقية للفتحة وارتفاع المبنى عنها.',
            'عدد الألواح وتوزيع الفواصل الرأسية والأفقية.',
            'اختيار الفتحات والحركة للأجزاء القابلة للفتح مثل الأبواب.',
            'مدى الحاجة إلى زجاج واحد أو زجاج مزدوج بحسب العزل والصوت.',
            'طريقة التثبيت المناسبة والمسافة عن الأرضيات والجدران.',
          ],
        },
        {
          heading: 'الخيارات المتاحة',
          paragraphs: [
            'تختلف الواجهات حسب نظام التثبيت ونوع الزجاج. الزجاج السكريت (المقسّى حرارياً) هو الأنسب لأنه أكثر تحملاً وأماناً في حال الكسر مقارنة بالزجاج العادي. ويمكن اختيار زجاج شفاف أو ملوّن أو مطفي (فرستد) أو عاكس بحسب المبنى.',
            'لا يوجد اختيار واحد صحيح للجميع؛ لأن الاختيار المثالي يعتمد على رؤية المالك، ومقدار التعرض للشمس، وطبيعة الحركة أمام الواجهة.',
          ],
        },
        {
          heading: 'اعتبارات مهمة قبل التركيب',
          list: [
            'الميلان أو الاستقامة المطلوبة للواجهة.',
            'طريقة تعويض التمدد الناتج عن حرارة الرياض صيفاً.',
            'ارتداد المطر وحمايته من الدخول عند الأسفل.',
            'إمكانية تسليك أو تمرير الأسلاك والمناور إن وجدت.',
            'المساحة المتاحة لتحرير الفتحات أثناء الدوران والوصول.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          paragraphs: [
            'لا يمكن تقديم سعر ثابت قبل معرفة المقاس والتصميم، لأن التكلفة تتبع التفاصيل. وهذه أهم العوامل:',
          ],
          list: [
            'إجمالي مساحة الواجهة (العرض × الارتفاع).',
            'سماكة الزجاج ونوعه (شفاف / ملوّن / مطفي / عاكس).',
            'هل الزجاج طبقة واحدة أم مزدوج (دبل جلاس).',
            'نظام التثبيت والإطارات المستخدمة.',
            'عدد الأجزاء المتحركة أو الأبواب داخل الواجهة.',
            'ارتفاع التركيب وصعوبة الوصول إلى الموقع.',
            'الإنارة أو التجهيزات الإضافية إن وُجدت.',
          ],
        },
        {
          heading: 'كيف نسير في الطلب',
          paragraphs: [
            'نبدأ بتوصيف واضح لما تحتاجه: المساحة، الاستخدام، والأثر البصري المطلوب. ثم نتفق على خامات ونظام التثبيت، ثم نجري القياس الفعلي قبل التصنيع، وننفّذ التركيب بعد ذلك.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل الزجاج المستخدم في الواجهات آمن؟',
          a: 'نعمل بزجاج سكريت (مقسّى حرارياً) الذي يتحمل أكثر ويتفتت لحبيبات صغيرة عند الكسر، وهو أنسب للواجهات مقارنة بالزجاج العادي. ومع ذلك يعتمد الاختيار النهائي على الاستخدام والتصميم.',
        },
        {
          q: 'هل تكفي الصور لطلب تسعير؟',
          a: 'الصور تساعدنا على الفهم الأولي، لكن التسعير يحتاج إلى الأرقام والقياس الفعلي. وكلما أرسلت الأبعاد المطلوبة كان العرض أدق.',
        },
        {
          q: 'ما الأثر على مساحة الفتح؟',
          a: 'سنوضح لك قبل التصنيع أي الفتحات تناسب موقعك ونظام الدوران المناسب لكل فتحة.',
        },
      ],
    },
    en: {
      title: 'Tempered Glass Facades',
      metaTitle: 'Tempered Glass Facades in Riyadh | Design & Installation',
      metaDescription:
        'Tempered glass facades in Riyadh for shops, offices and building entrances. Learn about design, measurement and installation considerations, and what affects facades cost.',
      h1: 'Tempered Glass Facades in Riyadh',
      keywords: ['tempered glass facades', 'glass facade installation Riyadh'],
      imageAlt: 'Diagram-style illustration of a glass facade with a measured mullion grid',
      intro: [
        'A facade is the first thing a customer sees, and it is also the part of the building most exposed to Riyadh’s sun, wind and rain. A good facade combines the look of the building with practical choices about measuring, framing and installation.',
        'We design and install tempered glass facades in Riyadh for shops, offices and entrances — choosing the panel layout that suits the opening, and explaining the differences between options before any work begins.',
      ],
      sections: [
        {
          heading: 'Where glass facades are used',
          list: [
            'Shop and shatter before, allowing daylight in and letting people see inside.',
            'Office and company entrances where the facade is part of the brand.',
            'Showrooms and display areas that need three-dimensional visibility.',
            'Partial exterior screens and the covered portions of entrances.',
          ],
        },
        {
          heading: 'What we consider in measurement and design',
          paragraphs: [
            'A facade is not a single sheet of glass — it is a system of panels, frames and fixings. We start from the actual size of the opening and its height, then work out how the panels and their joints will be divided.',
          ],
          list: [
            'The true dimensions of the opening and its height above the ground.',
            'Panel count and the distribution of vertical and horizontal joints.',
            'Which sections open, and how they pivot or slide.',
            'Whether single or double glazing is needed for insulation and sound.',
            'The fixing method and clearances from floors and walls.',
          ],
        },
        {
          heading: 'Available options',
          paragraphs: [
            'Facades differ by fixing system and glass type. Tempered glass is the right choice for facades because it is more robust and much safer when it breaks. You can choose clear, coloured, frosted or reflective glass depending on the building.',
            'There is no single correct option for everyone: the best choice depends on the owner’s vision, the amount of sun exposure and the traffic in front of the facade.',
          ],
        },
        {
          heading: 'Considerations before installation',
          list: [
            'The verticality and alignment required for the facade.',
            'How to accommodate the seasonal movement caused by summer heat.',
            'Keeping rain from entering at the base.',
            'Whether cabling, lighting or blinds need to be routed.',
            'Clear runway space needed for opening doors.',
          ],
        },
        {
          heading: 'What affects the price',
          paragraphs: [
            'A fixed price cannot be given before the dimensions and design are known, because the cost follows the details. The main factors are:',
          ],
          list: [
            'The total area of the facade (width × height).',
            'The type and thickness of the glass (clear, coloured, frosted or reflective).',
            'Single versus double glazing (insulated glass).',
            'The fixing system and framing used.',
            'The number of moving sections or doors within the facade.',
            'The installation height and how hard the site is to reach.',
            'Any additional lighting or equipment.',
          ],
        },
        {
          heading: 'How the process works',
          paragraphs: [
            'We start with a clear description of what you need: the area, the use and the visual result. Then we agree on the materials and fixing system, carry out the actual measurement before manufacturing, and install afterwards.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is the glass used in facades safe?',
          a: 'We use tempered glass, which is stronger and breaks into small granules when it fails. It is the right choice for facades. The final specification still depends on the use and design.',
        },
        {
          q: 'Are photos enough to request pricing?',
          a: 'Photos help with a first understanding, but pricing needs numbers and a measurement. The more accurate the dimensions you send, the more accurate the quote.',
        },
        {
          q: 'Will the opening still work properly?',
          a: 'We explain, before manufacturing, which opening and hinge arrangement fits your site.',
        },
      ],
    },
  },
  {
    id: 'doors',
    slug: 'glass-doors',
    icon: 'door',
    image: '/images/services/doors.svg',
    related: ['facades', 'partitions', 'repair'],
    ar: {
      title: 'أبواب زجاج سكريت',
      metaTitle: 'أبواب زجاج سكريت بالرياض | تفصيل وتركيب أبواب زجاج',
      metaDescription:
        'تفصيل وتركيب أبواب زجاج سكريت في الرياض للمنازل والمكاتب والمحلات. تعرّف على أنواع الأبواب والمفصلات والمقاسات المناسبة وإصلاح الأبواب بكفاءة.',
      h1: 'أبواب زجاج سكريت في الرياض',
      keywords: ['أبواب زجاج سكريت', 'تركيب أبواب زجاج بالرياض', 'إصلاح أبواب زجاج'],
      imageAlt: 'नमूذج توضيحي لباب زجاجي بمقاس واضح ومفصلة',
      intro: [
        'باب الزجاج هو الجزء الذي يلمسه الزائر أول مرة، ولذلك لا بد أن يناسب المكان من حيث المقاس والمفصلات وطريقة الفتح. أي خطأ صغير في القياس يظهر مباشرة عند أول استخدام.',
        'نفصّل ونركّب أبواب زجاج سكريت في الرياض للمنازل والمكاتب والمحلات، ونوضح الفرق بين الأبواب المفردة والمزدوجة والسحاب حسب المساحة.',
      ],
      sections: [
        {
          heading: 'الأنواع الشائعة',
          list: [
            'باب زجاجي مفرد بفتحة على مفصلات أرضية أو جانبية.',
            'باب زجاجي مزدوج في المداخل الأوسع.',
            'باب سحاب ينزلق داخل مسار أو يُعلَّق من الأعلى.',
            'أبواب داخلية للمكاتب والغرف.',
          ],
        },
        {
          heading: 'المقاس قبل التصميم',
          paragraphs: [
            'المعبُر الناس من أي باب، لذلك يكون القرار الأول هو المقاس المريح للحركة. نحدد عرض الفتحة وارتفاعها، ثم جهة الدوران واتجاهها.',
          ],
          list: [
            'الفراغ المطلوب بين الباب والأرضية.',
            'المسافة التي يحتاجها الباب للدوران داخل الغرفة.',
            'الفراغ الجانبي المطلوب للمفصلة والمقبض.',
            'المساحة المتاحة للأبواب السحاب ومسارها.',
          ],
        },
        {
          heading: 'المفصلات والتجهيزات',
          paragraphs: [
            'المفصلة الجيدة تجعل الباب يفتح ويغلق لسنوات. لذلك نتحقق من قدرة التجهيزات على تحمل وزن الباب واستخدامه المتكرر.',
          ],
          list: [
            'مفصلة أرضية تناسب وزن اللوح.',
            'مفصلة جانبية للاستخدامات الأخف.',
            'مقابض بمقاس مريح وسهلة الاستخدام.',
            'كيف يغلق الباب تلقائياً إن رغبت.',
          ],
        },
        {
          heading: 'اعتبارات الأمان',
          paragraphs: [
            'نستخدم زجاجاً سكريت للمواصلات حيث يزيد تحمله ويجعل الكسر أقل خطراً. ويراعى أيضاً زجاج السطح عند مداخل المباني.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'مقاس الباب وارتفاعه.',
            'نوع الزجاج وسماكته.',
            'نوع المفصلة والتجهيزات.',
            'هل الباب مفرد أم مزدوج أم سحاب.',
            'التشطيبات الإضافية مثل الخصوصية أو الحماية.',
          ],
        },
        {
          heading: 'كيف نتعامل مع الطلب',
          paragraphs: [
            'أخبرنا بقياسات المدخل أو أرسل صوراً للفتحة واتجاه الفتح. سنتفق على المقاس والنظام ثم ننفّذ التركيب بعد تركيب بور الجل لقياس دقيق.',
          ],
        },
      ],
      faqs: [
        {
          q: 'ما الفرق بين الباب المفرد والمزدوج؟',
          a: 'المفرد لفتحة ضيقة، والمزدوج لفتحة أوسع. الاختيار يعتمد على عرض المدخل حجم الحركة اليومية.',
        },
        {
          q: 'هل يمكن إصلاح باب قائم بدل استبداله؟',
          a: 'في كثير من الحالات يكون الإصلاح ممكناً لتعديل المفصلة أو المقبض أو تغيير جزء من الباب. نفحص الحالة أولاً.',
        },
        {
          q: 'كيف أطلب تسعيراً؟',
          a: 'أرسل لنا الأبعاد المطلوبة واتجاه الفتح وصور المدخل، وسنعود إليك بالتفاصيل.',
        },
      ],
    },
    en: {
      title: 'Tempered Glass Doors',
      metaTitle: 'Tempered Glass Doors in Riyadh | Custom Glass Doors',
      metaDescription:
        'Tempered glass doors in Riyadh for homes, offices and shops. Compare single, double and sliding doors, hinges and clearances, and how glass doors are repaired.',
      h1: 'Tempered Glass Doors in Riyadh',
      keywords: ['tempered glass doors', 'glass door installation Riyadh', 'glass door repair'],
      imageAlt: 'Line illustration of a glass door showing dimensions and hinge',
      intro: [
        'A glass door is the part that a visitor touches first, so it has to suit the opening in size, hinge and swing. A small measuring error shows immediately on the first use.',
        'We build and install tempered glass doors in Riyadh for homes, offices and shops, and explain the difference between single, double and sliding doors.',
      ],
      sections: [
        {
          heading: 'Common door types',
          list: [
            'Single glass door on a floor or side hinge.',
            'Double glass door for wider entrances.',
            'Sliding door that runs in a track or hangs from above.',
            'Internal doors for offices and rooms.',
          ],
        },
        {
          heading: 'Size before design',
          paragraphs: [
            'People walk through the door, so the first decision is the opening size. We measure the width and height, then decide the swing direction and pivot.',
          ],
          list: [
            'The clearance needed between door and floor.',
            'The space the door needs to swing inside the room.',
            'Side clearance for the hinge and handle.',
            'Track space for sliding doors.',
          ],
        },
        {
          heading: 'Hinges and hardware',
          paragraphs: [
            'Good hardware makes the door open and close for years. We check that the fittings can carry the door’s weight and its daily use.',
          ],
          list: [
            'A floor hinge matched to the weight of the door.',
            'Side hinges for lighter applications.',
            'Handles with a comfortable size and easy operation.',
            'Self-closing options if you want one.',
          ],
        },
        {
          heading: 'Safety considerations',
          paragraphs: [
            'We use tempered safety glass for doors because it is stronger and much less dangerous when it breaks.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'Door size and height.',
            'Glass type and thickness.',
            'Hinge and hardware quality.',
            'Single, double or sliding construction.',
            'Additional finishes such as privacy or films.',
          ],
        },
        {
          heading: 'How we work on your request',
          paragraphs: [
            'Tell us the size of the opening or send photos with the swing direction. We agree on the size and system, then install after a site measurement.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Single or double door?',
          a: 'Single suits a narrow opening, double suits a wider entrance. The choice depends on the entrance width and daily traffic.',
        },
        {
          q: 'Can an existing door be repaired instead of replaced?',
          a: 'Often yes — a hinge, handle or a section can be adjusted. We inspect the door first.',
        },
        {
          q: 'How do I request a quote?',
          a: 'Send the dimensions you need, the swing direction and photos of the entrance.',
        },
      ],
    },
  },
  {
    id: 'partitions',
    slug: 'glass-office-partitions',
    icon: 'partition',
    image: '/images/services/partitions.svg',
    related: ['rooms', 'doors', 'facades'],
    ar: {
      title: 'قواطع مكاتب زجاجية',
      metaTitle: 'قواطع مكاتب زجاجية بالرياض | فواصل زجاج للمكاتب',
      metaDescription:
        'تفصيل وتركيب قواطع مكاتب زجاجية في الرياض لتنظيم مساحات العمل مع الحفاظ على الإضاءة. تعرّف على أنواع القواطع ومستويات الخصوصية والعوامل المؤثرة في السعر.',
      h1: 'قواطع مكاتب زجاجية في الرياض',
      keywords: ['قواطع مكاتب زجاجية', 'فواصل زجاجية للمكاتب', 'قواطع زجاج للمكاتب'],
      imageAlt: 'رسم توضيحي لقاطع مكتب زجاجي بفواصل رأسية',
      intro: [
        'القواطع الزجاجية حل عملي لتقسيم مساحة العمل دون حجب الضوء الطبيعي. وتستخدم كثيراً في المكاتب المفتوحة وغرف الاجتماعات والاستقبال.',
        'نوضح الفرق بين أنواع القواطع ومستويات الخصوصية، وننفّذ التركيب بما يتناسب مع تصميم المكان.',
      ],
      sections: [
        {
          heading: 'الاستخدامات',
          list: [
            'تقسيم مكاتب مفتوحة إلى قاعات صغيرة.',
            'غرف اجتماعات واجتماعات مصغّرة.',
            'مناطق استقبال في الشركات.',
            'فواصل بين مساحات العمل المختلفة.',
          ],
        },
        {
          heading: 'أنواع القواطع',
          list: [
            'قاطع بزجاج كامل من الأرض إلى السقف.',
            'قاطع بنصف زجاج مع جزء سفلي ثابت.',
            'قواطع مطفيّة (فرستد) لخصوصية أكبر مع إضاءة.',
            'قواطع سحاب أو بزجاج قابل للتعديل.',
          ],
        },
        {
          heading: 'الخصوصية والإضاءة',
          paragraphs: [
            'المعادلة الأساسية في القواطع هي الموازنة بين الخصوصية ومرور الضوء. كلما كان الزجاج مصنفراً أو ملوّناً زادت الخصوصية وقلّ الضوء. ونحدد مستوى المناسب حسب غرض كل مساحة.',
          ],
        },
        {
          heading: 'القياس والتركيب',
          list: [
            'أبعاد الوحدات وتوزيعها على المساحة.',
            'طريقة التثبيت بالسقف والأرضية.',
            'الممرات ونقاط الوصول والعمل.',
            'ترتيب الأثاث وإيصال الكهرباء.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'المساحة الكلية المطلوب تقسيمها.',
            'نوع الزجاج ودرجة تصنفره.',
            'ارتفاع القاطع وتفاصيل الإطار.',
            'عدد الأبواب والنوافذ في القاطع.',
            'هل يوجد نظام تعليق خاص؟',
          ],
        },
        {
          heading: 'كيف ننفّذ',
          paragraphs: [
            'نبدأ بفهم شكل العمل ومستوى الخصوصية المطلوب، ثم نرسل تصوراً بالوحدات والمقاسات. بعد اعتماد التصور نجري القياس الفعلي ونركّب.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل القاطع الزجاجي عازل للصوت؟',
          a: 'يعزل جزئياً، ويزداد العزل بالمقاسات الإضافية. سنوضح لك الخيار الأنسب حسب مستوى الضوضاء في مكانك.',
        },
        {
          q: 'هل يمكن تركيب قواطع في مكان قائم؟',
          a: 'نعم، وهذا شائع. نساعدك في اختيار النظام المناسب دون الحاجة إلى تعديلات كبيرة.',
        },
        {
          q: 'كم يستغرق التنفيذ؟',
          a: 'المدة تعتمد على المساحة والتصميم. نعطيك جدولاً زمنياً واضحاً بعد اعتماد التصميم.',
        },
      ],
    },
    en: {
      title: 'Glass Office Partitions',
      metaTitle: 'Glass Office Partitions in Riyadh | Office Glass Dividers',
      metaDescription:
        'Glass office partitions in Riyadh that divide your workplace while keeping natural light. Compare partition types, privacy levels and cost factors.',
      h1: 'Glass Office Partitions in Riyadh',
      keywords: ['glass office partitions', 'office glass dividers Riyadh'],
      imageAlt: 'Diagram of an office glass partition with vertical joints',
      intro: [
        'Glass partitions divide a workplace without blocking natural light. They are common in open offices, meeting rooms and reception areas.',
        'We explain the difference between partition types and privacy levels, and install to suit the layout of the space.',
      ],
      sections: [
        {
          heading: 'Where they are used',
          list: [
            'Splitting an open office into smaller rooms.',
            'Meeting rooms and small conference rooms.',
            'Reception areas in companies.',
            'Removable dividers between work zones.',
          ],
        },
        {
          heading: 'Partition types',
          list: [
            'Full glass from floor to ceiling.',
            'Half glass with a solid lower section.',
            'Frosted partitions for more privacy with light.',
            'Sliding or adjustable glass partitions.',
          ],
        },
        {
          heading: 'Privacy and light',
          paragraphs: [
            'The main trade-off with partitions is balancing privacy and light. The more frosted or tinted the glass, the more privacy and less light. We help you choose the level for each space.',
          ],
        },
        {
          heading: 'Measurement and installation',
          list: [
            'Unit dimensions and how they are distributed.',
            'Fixing to ceiling and floor.',
            'Circulation routes and access points.',
            'Furniture placement and cable routing.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'The total area to be divided.',
            'Glass type and degree of frosting.',
            'Partition height and frame details.',
            'Number of doors and windows in the partition.',
          ],
        },
        {
          heading: 'How we do it',
          paragraphs: [
            'We begin by understanding the workflow and the privacy required, then send a layout with units and sizes. After approval we take the site measurement and install.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do glass partitions reduce noise?',
          a: 'They reduce it partially; more separation improves it. We explain the right option for the noise level in your space.',
        },
        {
          q: 'Can partitions be fitted into an existing office?',
          a: 'Yes, this is common. We help choose a system that avoids major modifications.',
        },
        {
          q: 'How long does it take?',
          a: 'It depends on the area and the design. We give you a clear timeline after the design is approved.',
        },
      ],
    },
  },
  {
    id: 'showers',
    slug: 'glass-shower-enclosures',
    icon: 'shower',
    image: '/images/services/showers.svg',
    related: ['mirrors', 'doors', 'repair'],
    ar: {
      title: 'شاورات وكبائن حمامات',
      metaTitle: 'شاورات زجاج وكبائن حمامات زجاجية بالرياض | تفصيل وتركيب',
      metaDescription:
        'تفصيل وتركيب شاورات زجاج وكبائن حمامات زجاجية في الرياض بحسب المقاس. تعرّف على الأنواع ومستويات الخصوصية والتجهيزات والعوامل المؤثرة في السعر.',
      h1: 'شاورات وكبائن حمامات زجاجية في الرياض',
      keywords: ['شاور زجاج', 'كبائن حمامات زجاجية', 'تفصيل شاور زجاج'],
      imageAlt: 'رسم توضيحي لكابينة شاور زجاجية بمقاسات',
      intro: [
        'كابينة الحمام الزجاجية تحافظ على نظافة المكان وتحد من تناثر الماء، لكن جودة النتيجة تعتمد على دقة القياس واختيار التجهيزات المناسبة.',
        'نفصّل ونركّب شاورات وكبائن حمامات زجاجية في الرياض بمقاسات مختلفة، حسب المساحة والتصميم.',
      ],
      sections: [
        {
          heading: 'الأنواع الشائعة',
          list: [
            'شاور بزاوية ثابتة مع باب.',
            'شاور مسطح (واحد) للحمامات الضيقة.',
            'شاور بممر من الشفة.',
            'كبينة كاملة مع إطار أو بدون.',
          ],
        },
        {
          heading: 'القياس هو الأساس',
          paragraphs: [
            'لأن الحمام غالباً محدود المساحة، يكون القياس بدقة أمراً لا بديل عنه. ولذلك نجري قياساً فعلياً في الموقع وليس تقديراً من الرسم.',
          ],
          list: [
            'أبعاد المكان والطول والعرض.',
            'مية الحواف وجدار الشطاف.',
            'اتجاه الباب ومنطقة الوقوف داخل الكابينة.',
            'وجود خلاط أو شفط.',
          ],
        },
        {
          heading: 'الزجاج والتجهيزات',
          paragraphs: [
            'نستخدم زجاجاً سكريت للكبائن لسهولته وقلة خطر الكسر. ويمكن اختيار زجاج شفاف للمساحات الصغيرة أو مصنفر (فرستد) لمزيد من الخصوصية.',
          ],
          list: [
            'مفصلة باب أو زاوية.',
            'مقبض مريح وسهل التعليم.',
            'الملحقات اليدوية للتركيب.',
          ],
        },
        {
          heading: 'اعتبارات التركيب',
          list: [
            'منع تسرب الماء من الأسفل والجانبين.',
            'المسافة بين الكابينة والأدوات الصحية.',
            'طريقة تصريف الماء داخل الكابينة.',
            'المرور من الباب واتجاه فتحه.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'مقاس الكابينة وعدد الألواح.',
            'نوع الزجاج وسماكته.',
            'هل الزجاج مصنفر أم شفاف.',
            'نوع المفصلة والتجهيزات.',
            'وجود إطار أو تركيب بدون إطار.',
          ],
        },
        {
          heading: 'كيف نسير في التنفيذ',
          paragraphs: [
            'خذ القياس أو أرسل صوراً للحمام وسنقرّر إن كان مناسباً. بعد الاتفاق على التصميم نجري القياس الفعلي ثم التركيب.',
          ],
        },
      ],
      faqs: [
        {
          q: 'ما المقاس المناسب للشاور؟',
          a: 'يعتمد على حجم الحمام وتوزيع الأدوات. أخبرنا بالأبعاد أو أرسل صوراً وسنوضح الخيار.',
        },
        {
          q: 'هل يمنع الماء من التناثر بالكامل؟',
          a: 'الكابينة الجيدة تحدّ من التناثر بدرجة كبيرة، مع بقاء بعض حركة الماء في منطقة دخول الباب.',
        },
        {
          q: 'هل يمكن تفصيل الكابينة بدون إطار؟',
          a: 'نعم، لكنه يعتمد على استقامة الجدران والأرضية. نتحقق من ذلك في القياس.',
        },
      ],
    },
    en: {
      title: 'Shower Enclosures',
      metaTitle: 'Glass Shower Enclosures in Riyadh | Bathroom Glass Cubicles',
      metaDescription:
        'Custom tempered glass shower enclosures in Riyadh. Learn about measuring your bathroom, enclosure types, privacy levels, hardware and cost factors.',
      h1: 'Glass Shower Enclosures in Riyadh',
      keywords: ['glass shower enclosure', 'shower glass Riyadh', 'bathroom glass cabin'],
      imageAlt: 'Line drawing of a glass shower enclosure with measurements',
      intro: [
        'A glass shower enclosure keeps the bathroom clean and limits splashing, but the result depends on accurate measuring and the right hardware.',
        'We supply and install tempered glass shower enclosures in Riyadh in various sizes to suit the space.',
      ],
      sections: [
        {
          heading: 'Common types',
          list: [
            'Corner enclosure with a single door.',
            'Flat (walk-in) panel for narrow bathrooms.',
            'Enclosure with a step or curb.',
            'Full cabin with or without a frame.',
          ],
        },
        {
          heading: 'Measuring comes first',
          paragraphs: [
            'A bathroom is usually tight, so accurate measurement matters. We take the measurement on site rather than estimating from a drawing.',
          ],
          list: [
            'The actual width and height of the space.',
            'The position of walls, the curb and the drain.',
            'Door swing and the drying zone inside.',
            'The position of faucets and any sloped surfaces.',
          ],
        },
        {
          heading: 'Glass and hardware',
          paragraphs: [
            'We use tempered glass, because it is stronger and breaks into small granules. You can choose clear for a small bathroom or frosted for privacy.',
          ],
          list: [
            'A hinge or pivot matched to the panel weight.',
            'A comfortable, easy-grip handle.',
            'Silicone sealing and finishing.',
          ],
        },
        {
          heading: 'Installation considerations',
          list: [
            'Keeping water from escaping at the base and sides.',
            'Clearance between the enclosure and the fittings.',
            'How water drains inside the enclosure.',
            'The door’s usable width and swing.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'The size of the enclosure and the number of panels.',
            'Glass type and thickness.',
            'Clear versus frosted glass.',
            'The hardware used.',
            'Framed or frameless construction.',
          ],
        },
        {
          heading: 'How the process works',
          paragraphs: [
            'Take the dimensions or send photos of the bathroom and we will confirm what fits. After the design is agreed we measure on site and install.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What size enclosure do I need?',
          a: 'It depends on the bathroom and the fixture layout. Send photos or dimensions and we will explain.',
        },
        {
          q: 'Does a shower enclosure stop all water?',
          a: 'It greatly reduces splashes, but some water will still travel near the door opening.',
        },
        {
          q: 'Can it be frameless?',
          a: 'Yes, if the walls and floor are straight. We check this during measurement.',
        },
      ],
    },
  },
  {
    id: 'rooms',
    slug: 'glass-rooms',
    icon: 'room',
    image: '/images/services/rooms.svg',
    related: ['partitions', 'facades', 'doors'],
    ar: {
      title: 'غرف زجاجية',
      metaTitle: 'تركيب غرف زجاجية بالرياض | غرف زجاج سكريت',
      metaDescription:
        'تفصيل وتركيب غرف زجاجية في الرياض للاستراحات والمكاتب والمساحات. تعرّف على استخدامات الغرف الزجاجية والتجهيزات والعوامل المؤثرة في السعر.',
      h1: 'تركيب غرف زجاجية في الرياض',
      keywords: ['غرف زجاجية', 'تركيب غرف زجاج بالرياض', 'غرف زجاج سكريت'],
      imageAlt: 'رسم توضيحي لغرفة زجاجية بألواح وأعمدة',
      intro: [
        'الغرفة الزجاجية مساحة مغلقة شفافة أو شبه شفافة. وتستخدم في المساحات التي نجمع فيها بين هدوء الانفراد ومرور الضوء ووضوح الرؤية.',
        'نفصّل ونركّب غرفاً زجاجية في الرياض بأحجام مختلفة حسب المساحة والاستخدام.',
      ],
      sections: [
        {
          heading: 'أين تُستخدم',
          list: [
            'استراحات ومساحات جلوس داخلية أو خارجية.',
            'غرف اجتماعات ومناطق اجتماع مصغّرة.',
            'مساحات عمل وغرف في الاستراحات.',
            'مساحات عرض داخلية.',
          ],
        },
        {
          heading: 'الشكل والمعمار',
          list: [
            'غرفة بزوايا مستقيمة وسطح مسطح.',
            'غرفة بزجاج من الأرض إلى السقف.',
            'غرفة بمزيج من الزجاج والألمنيوم.',
            'فواصل داخلية بالزجاج المطفي.',
          ],
        },
        {
          heading: 'القياس والأبعاد',
          paragraphs: [
            'تحديد الارتفاع والمساحة مهم قبل أي تركيب، لأنه يحدد سماكة الزجاج وعدد الوصلات ومستوى الدعم المطلوب.',
          ],
          list: [
            'الارتفاع من الأرض إلى مكان التثبيت.',
            'الزوايا المطلوبة والأبعاد الكلية.',
            'ترتيب الأبواب والفتحات.',
            'الاحتياج إلى إضاءة أو تهوية.',
          ],
        },
        {
          heading: 'التجهيزات',
          list: [
            'زجاج سكريت بمقاسات مناسبة لعدد الفتحات.',
            'ألمنيوم أو مسارات بحسب التصميم.',
            'أنواع يفتح بها الباب حسب الاستخدام.',
            'إكسسوارات وخامات بحسب الطلب.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'المساحة الكلية المغطاة.',
            'ارتفاع الجدران الزجاجية.',
            'نوع الزجاج وسماكته.',
            'عدد الأبواب والفتحات.',
            'التشطيبات النهائية.',
          ],
        },
        {
          heading: 'كيف ننفّذ',
          paragraphs: [
            'نبدأ بتوصيف المكان والغرض، ثم نقترح التصميم والمقاسات. بعد الاعتماد نجري القياس الفعلي وننفّذ التركيب.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل الغرفة الزجاجية مناسبة للخارج؟',
          a: 'يمكن تنفيذها في مساحات مظللة، ويعتمد ذلك على تصميم المكان. نوضح لك ما يناسب مكانك.',
        },
        {
          q: 'هل يمكن أن تكون الغرفة عازلة للحرارة؟',
          a: 'يعتمد على نوع الزجاج واستخدام الزجاج المزدوج. سنوضح لك الخيارات في التسعير.',
        },
        {
          q: 'هل يمكن إضافة تهوية؟',
          a: 'نعم، يمكن تصميم فتحات أو أجزاء متحركة حسب الحاجة.',
        },
      ],
    },
    en: {
      title: 'Glass Rooms',
      metaTitle: 'Glass Room Installation in Riyadh | Tempered Glass Rooms',
      metaDescription:
        'Custom glass rooms in Riyadh for majlis, offices and outdoor spaces. Learn about glass room uses, glazing, hardware and cost factors.',
      h1: 'Glass Room Installation in Riyadh',
      keywords: ['glass rooms', 'glass room installation Riyadh'],
      imageAlt: 'Diagram illustration of a glass room with framing lines',
      intro: [
        'A glass room divides a space while keeping light and visibility. It is a practical way to create a defined area inside an open space.',
        'We build and install glass rooms in Riyadh in different sizes to suit the space and its use.',
      ],
      sections: [
        {
          heading: 'Where glass rooms are used',
          list: [
            'Divided areas inside homes or majlis.',
            'Meeting and gathering areas.',
            'Study or work zones.',
            'Show or display areas.',
          ],
        },
        {
          heading: 'Typical configurations',
          list: [
            'A simple rectangular room with a flat roof.',
            'Floor-to-ceiling glazing.',
            'A glazed corner within a larger space.',
            'Internal dividers using frosted glass.',
          ],
        },
        {
          heading: 'Measurement and dimensions',
          paragraphs: [
            'Height and area drive everything else: glass thickness, the number of joints and the amount of support. We measure on site before manufacturing.',
          ],
          list: [
            'Height from floor to the fixing point.',
            'Overall width, depth and corners.',
            'Door positions and openings.',
            'Any lighting or ventilation needed.',
          ],
        },
        {
          heading: 'Hardware and materials',
          list: [
            'Tempered glass sized for each panel.',
            'Aluminium or framing per design.',
            'Door mechanism matched to use.',
            'Accessories and finishes as required.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'The total covered area.',
            'Wall height.',
            'Glass type and thickness.',
            'Number of doors and openings.',
            'Final finishes.',
          ],
        },
        {
          heading: 'How we work',
          paragraphs: [
            'We start with the space and its purpose, then propose a design and sizes. After approval we measure on site and install.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can a glass room be built outdoors?',
          a: 'It can in shaded areas; it depends on the location. We explain what suits your site.',
        },
        {
          q: 'Can a glass room be insulated?',
          a: 'Yes, with the right glass and double glazing. We explain the options in the quote.',
        },
        {
          q: 'Can you add ventilation?',
          a: 'Yes, openings or movable sections can be designed as needed.',
        },
      ],
    },
  },
  {
    id: 'railings',
    slug: 'glass-railings',
    icon: 'railing',
    image: '/images/services/railings.svg',
    related: ['facades', 'doors', 'rooms'],
    ar: {
      title: 'درابزين زجاج',
      metaTitle: 'درابزين زجاج بالرياض | تفصيل وتركيب درابزين زجاجي',
      metaDescription:
        'تفصيل وتركيب درابزين زجاج زجاجي في الرياض للسلالم وبلكونات الدرج. تعرّف على أنواع الدرابزين والاعتبارات الفنية والعوامل المؤثرة في السعر.',
      h1: 'درابزين زجاج في الرياض',
      keywords: ['درابزين زجاج', 'درابزين زجاجي', 'تركيب درابزين زجاج'],
      imageAlt: 'رسم توضيحي لدرابزين زجاجي بخطوط هندسية',
      intro: [
        'الدرابزين الزجاجي يمنح السلالم والمساحات المفتوحة مظهراً خفيفاً ومساحة أوسع. وهو يتطلب تصميماً مناسباً للسلامة لا تركز فقط على المظهر.',
        'نفصّل ونركّب درابزين زجاج في الرياض للدرج والشرفات والمداخل حسب التصميم.',
      ],
      sections: [
        {
          heading: 'أين يُستخدم',
          list: [
            'درابزين داخلي للدرابزين من الدرج.',
            'دربزين شرفات ونوافذ.',
            'حواجز للبلكونات والمداخل.',
            'فواصل للحماية في المساحات المرتفعة.',
          ],
        },
        {
          heading: 'أنواع الدرابزين',
          list: [
            'درابزين زجاجي مع سطوح أعلى الزجاج.',
            'درابزين زجاجي مع أعمدة دعم.',
            'درابزين مثبّت من الجهة (إن لاين).',
          ],
        },
        {
          heading: 'السلامة أولاً',
          paragraphs: [
            'الدرابزين مهمة أساسية فيه التحمل، لذلك يعتمد التصميم على سماكة الزجاج ونوع التثبيت والارتفاع المناسب للاستخدام. ونوضح لك الاختيار الأمثل قبل التنفيذ.',
          ],
        },
        {
          heading: 'القياس والتركيب',
          list: [
            'ميلان السطح وقياسات الفتحة.',
            'نقاط التثبيت وتثبيت الحوامل بالسقف.',
            'التشطيبات النهائية للمقابض والوصلات.',
            'تجربة الفتح والتأكد من انسيابية الحركة.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'الطول الكلي للدرابزين.',
            'ارتفاعه ووظيفته.',
            'سماكة الزجاج ونوعه.',
            'نوع الإكسسوارات المستخدمة.',
            'المبنى ومستوى الوصول.',
          ],
        },
        {
          heading: 'كيف ننفّذ',
          paragraphs: [
            'أرسل لنا الطول التقريبي والشكل المطلوب. سنوضح الخامات والتفاصيل ثم نجري القياس وننفّذ.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل يمكن تركيب درابزين على السلالم القائمة؟',
          a: 'نعم غالباً. نتفقد الحالة والميل ونوضح الأنسب.',
        },
        {
          q: 'هل الزجاج السكريت آمن للدرابزين؟',
          a: 'نعم، ويعد الأنسب لأنه يتحمل ويصبح أقل خطراً عند الكسر. ويبقى التصميم النهائي بحسب ارتفاع واستخدام.',
        },
        {
          q: 'كيف أحصل على تسعير دقيق؟',
          a: 'أرسل الطول وقياسات المكان وصوراً للموقع.',
        },
      ],
    },
    en: {
      title: 'Glass Railings',
      metaTitle: 'Glass Railings in Riyadh | Balustrade & Staircase Glass',
      metaDescription:
        'Custom glass railings and balustrades in Riyadh for stairs and balconies. Learn about applications, safety considerations and cost factors.',
      h1: 'Glass Railings in Riyadh',
      keywords: ['glass railings', 'glass balustrade Riyadh'],
      imageAlt: 'Line illustration of a glass railing along a staircase',
      intro: [
        'Glass railings define a space while keeping light and views. They are common on staircases, balconies and terraces.',
        'We design and install glass railings in Riyadh, choosing the system to suit the opening and the use.',
      ],
      sections: [
        {
          heading: 'Where glass railings are used',
          list: [
            'Staircases in homes and offices.',
            'Balconies and terraces.',
            'Walkways and ramps.',
            'Interior mezzanines and open areas.',
          ],
        },
        {
          heading: 'Common systems',
          list: [
            'Frameless glass balustrade.',
            'Glass panels with a handrail.',
            'Glass with a support post.',
            'Inline (side-fixed) panels.',
          ],
        },
        {
          heading: 'Safety considerations',
          paragraphs: [
            'For a railing, the structural part matters. We check the height, the fixing and the glass strength against the intended use, and use tempered glass.',
          ],
        },
        {
          heading: 'Measurement and installation',
          list: [
            'Overall length of the run.',
            'Steps, landings and handrail continuity.',
            'Fixing method to structure.',
            'Aluminium and stainless elements.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'Total length of the railing.',
            'Height and design.',
            'Glass type and thickness.',
            'Hardware and finish.',
            'The structural fixing required.',
          ],
        },
        {
          heading: 'How we work',
          paragraphs: [
            'Send us the approximate length and the shape you want. We explain the materials and details, then measure and install.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can a railing be added to an existing staircase?',
          a: 'Usually yes. We check the condition and the required height.',
        },
        {
          q: 'Is tempered glass safe for railings?',
          a: 'Yes, and it is the standard choice because it is stronger and safer when it breaks. The final design depends on the height and use.',
        },
        {
          q: 'How do I ask for pricing?',
          a: 'Send the length, the location and photos.',
        },
      ],
    },
  },
  {
    id: 'mirrors',
    slug: 'mirrors',
    icon: 'mirror',
    image: '/images/services/mirrors.svg',
    related: ['showers', 'partitions', 'doors'],
    ar: {
      title: 'مرايا',
      metaTitle: 'تفصيل مرايا بالرياض | تركيب وتركيب مرايا مقاس',
      metaDescription:
        'تفصيل وتركيب مرايا في الرياض للمنازل والصالونات والمحلات. تعرّف على المقاسات والتشطيبات وطريقة التثبيت والعوامل المؤثرة في السعر.',
      h1: 'تفصيل وتركيب مرايا في الرياض',
      keywords: ['تفصيل مرايا', 'تركيب مرايا بالرياض', 'مرايا مقاس'],
      imageAlt: 'رسم توضيحي لمرآة مقاس وتشطيب حواف',
      intro: [
        'المرآة عنصر بسيط لكنه يؤثر في إحساس المساحة والإضاءة داخل المكان. وعند تفصيلها بمقاس مناسب تكون النتيجة أفضل وأكثر التصاقاً بالجدار.',
        'نفصّل ونركّب مرايا في الرياض بمقاسات مختلفة وتشطيبات حسب قاعدة التصميم.',
      ],
      sections: [
        {
          heading: 'الاستخدامات',
          list: [
            'صالونات وغرف نوم بمرآة طويلة.',
            'مداخل وممرات بمرآة تعكس الضوء.',
            'محلات وصالات عرض.',
            'مرايا على قاعدة أو إطار.',
          ],
        },
        {
          heading: 'المقاس والتشطيب',
          paragraphs: [
            'عادةً ما يُقاس محل المرآة فعلياً قبل التصنيع، لأن الحواف والزوايا تظهر بقوة على السطح العاكس. ويمكن أن يكون التشطيب مباشراً أو مبرّداً حسب الطلب.',
          ],
        },
        {
          heading: 'طريقة التثبيت',
          list: [
            'تثبيت خلفي بلاصق مخصص.',
            'إطار ألمنيوم أو خشبي بحسب التصميم.',
            'حوامل مثبتة تتحمل الأبعاد الكبيرة.',
            'مراعاة نوع الجدار إذا كان جبساً أو طوباً.',
          ],
        },
        {
          heading: 'التجهيزات والتشطيبات',
          list: [
            'إضاءة مدمجة عند الحاجة.',
            'تشطيب حواف مستقيمة أو منحنية.',
            'طبقة حماية خلفية للدوبل جلاس.',
            'خيارات إطار متعددة الألوان.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'مقاس المرآة وسماكة الزجاج.',
            'جودة الزجاج العاكس المستخدم.',
            'طريقة التثبيت والإطار.',
            'البعد عن موضع التركيب.',
            'التشطيبات الإضافية.',
          ],
        },
        {
          heading: 'كيف ننفّذ',
          paragraphs: [
            'أرسل التصور أو المقاس وسنقترح الأنسب، ثم نجري القياس ونتفق على موعد التركيب.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل يمكن تفصيل مرآة بمقاس غير قياسي؟',
          a: 'نعم، وهو الأفضل لأن المقاس القياسي قد لا يناسب الجدار بدقة.',
        },
        {
          q: 'هل يمكن تركيب مرآة على جدار جبس؟',
          a: 'نعم مع مراعاة نوع الجدار. سنتحقق من ذلك في القياس.',
        },
        {
          q: 'هل يشمل التسعير التركيب؟',
          a: 'يُوضّح في العرض هل السعر يشمل التركيب أم الزجاج فقط.',
        },
      ],
    },
    en: {
      title: 'Mirrors',
      metaTitle: 'Custom Mirrors in Riyadh | Cut-to-Size Mirror Installation',
      metaDescription:
        'Custom-cut mirrors in Riyadh for homes, salons and shops. Learn about sizes, edge finishes, mounting methods and what affects the price.',
      h1: 'Custom Mirrors in Riyadh',
      keywords: ['mirrors Riyadh', 'custom mirrors Riyadh'],
      imageAlt: 'Line illustration of a wall mirror showing edge finishing',
      intro: [
        'A mirror is a simple element, but it changes how large and bright a room feels. Custom-cutting the mirror to the wall gives a cleaner result.',
        'We cut and install mirrors in Riyadh in various sizes and finishes to suit the design.',
      ],
      sections: [
        {
          heading: 'Where mirrors are used',
          list: [
            'Salons and bedrooms with full-height mirrors.',
            'Entries and hallways to reflect light.',
            'Retail spaces and display areas.',
            'Mirrors with a frame or backing.',
          ],
        },
        {
          heading: 'Size and finish',
          paragraphs: [
            'The mirror is measured against the actual wall before it is cut, because the surface shows every edge and corner. Edges can be finished flat or with a bevel.',
          ],
        },
        {
          heading: 'Mounting methods',
          list: [
            'Back-mounted with a suitable adhesive.',
            'Framed in aluminium or wood to the design.',
            'Brackets to carry larger dimensions.',
            'Consideration of the wall construction.',
          ],
        },
        {
          heading: 'Options and finishes',
          list: [
            'Integrated lighting where required.',
            'Straight or bevelled edge finishes.',
            'A protective backing film.',
            'Different frame colours.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'Mirror size and glass thickness.',
            'The mirror quality used.',
            'Mounting and framing method.',
            'Distance to the installation site.',
            'Additional finishes.',
          ],
        },
        {
          heading: 'How we work',
          paragraphs: [
            'Send the size or the idea and we will suggest what fits best, then measure and agree on an installation date.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you cut a mirror to a non-standard size?',
          a: 'Yes, and it is usually better because a standard size rarely matches the wall exactly.',
        },
        {
          q: 'Can a mirror be fixed to a plaster wall?',
          a: 'Yes, with the right fixing. We check the wall type during measurement.',
        },
        {
          q: 'Does the price include installation?',
          a: 'The quote will state whether installation is included or it is material only.',
        },
      ],
    },
  },
  {
    id: 'repair',
    slug: 'glass-repair',
    icon: 'repair',
    image: '/images/services/repair.svg',
    related: ['doors', 'showers', 'mirrors'],
    ar: {
      title: 'صيانة وإصلاح الزجاج',
      metaTitle: 'صيانة زجاج سكريت وإصلاح أبواب زجاج بالرياض',
      metaDescription:
        'صيانة وإصلاح زجاج سكريت في الرياض: إصلاح أبواب زجاج، مفصلات، مقابض، وكسر الألواح. تعرّف على الحالات الشائعة والمعلومات المطلوبة منك.',
      h1: 'صيانة وإصلاح الزجاج في الرياض',
      keywords: ['صيانة زجاج سكريت', 'إصلاح أبواب زجاج', 'فني زجاج سكريت بالرياض'],
      imageAlt: 'رسم توضيحي لفني يفحص مفصلة باب زجاجي',
      intro: [
        'لا يحتاج الزجاج دائماً إلى استبدال كامل. في كثير من الحالات يكون تعديل المفصلة أو المقبض أو الحركة، أو استبدال لوح واحد، كافياً لإعادة الوضع كما كان.',
        'نتفق معك على ما يحتاج تشخيصاً وصيانة أو إصلاح في الرياض، ونوضح بوضوح ماذا يمكن أن يُصلح وماذا لا.',
      ],
      sections: [
        {
          heading: 'الحالات الشائعة',
          list: [
            'باب زجاجي لا يغلق أو لا يفصل جيداً.',
            'مفصلة أرضية تتحرك أو تضرب.',
            'مقبض مكسور أو مرتخي.',
            'قفل أو كالون لا يعمل.',
            'لوح مكسور أو مشطوب.',
          ],
        },
        {
          heading: 'ما تحتاج أن ترسله',
          paragraphs: [
            'كلما كانت المعلومات أوضح كان التشخيص أسرع. هذه أهم المعلومات المطلوبة:',
          ],
          list: [
            'صور للعنصر أو الباب من زوايا مختلفة.',
            'المقاس التقريبي للعنصر أو الفتحة.',
            'وصف المشكلة وكيف بدأت.',
            'هل العنصر مستورد أم محلي.',
          ],
        },
        {
          heading: 'الإصلاح مقابل الاستبدال',
          paragraphs: [
            'نوضح لك في كل حالة أي الخيارين أوفر وأكثر دقة. القرار يعتمد على حالة الزجاج وحالة التجهيزات.',
          ],
        },
        {
          heading: 'التعامل مع اللوح المكسور',
          list: [
            'قياس الفتحة المكسورة بدقة.',
            'اختيار نفس نوع الزجاج إن أمكن.',
            'تأمين العنصر المكسور وتفريغ المكان.',
            'إعادة التركيب والاختبار.',
          ],
        },
        {
          heading: 'العوامل التي تؤثر في السعر',
          list: [
            'نوع العمل: تعديل بسيط أم استبدال لوح.',
            'حجم اللوح المطلوب.',
            'نوع الزجاج وسماكته.',
            'التجهيزات التي تحتاج تغييراً.',
            'البعد عن الموقع.',
          ],
        },
        {
          heading: 'كيف نسير في الطلب',
          paragraphs: [
            'أرسل الصور والوصف، نسألك عن الأبعاد التي تساعدنا، ثم نقرّر المطلوب وننفّذ بعد التوجيه.',
          ],
        },
      ],
      faqs: [
        {
          q: 'هل تصلحون زجاجاً لا تعرفون كاشفه الأصلي؟',
          a: 'نعم، لكن يعتمد على حالة الزجاج. نوضح ما كنا ستفعله بناء على الصور.',
        },
        {
          q: 'هل تكفي الصور لتشخيص المشكلة؟',
          a: 'غالباً تساعدنا على فهم المشكلة، لكن التأكيد النهائي قد يحتاج فحصاً في الموقع.',
        },
        {
          q: 'هل يمكن إصلاح الباب نفسه بدل استبدال الباب؟',
          a: 'في كثير من الحالات نعم، مثل تعديل المفصلة أو المقبض. يعتمد ذلك على الفحص.',
        },
      ],
    },
    en: {
      title: 'Glass Maintenance & Repair',
      metaTitle: 'Glass Repair in Riyadh | Tempered Glass Maintenance',
      metaDescription:
        'Tempered glass maintenance and repair in Riyadh: glass doors, hinges, handles and broken panels. Learn the common cases and the information to send when you call.',
      h1: 'Glass Maintenance & Repair in Riyadh',
      keywords: ['glass repair Riyadh', 'tempered glass maintenance', 'glass technician Riyadh'],
      imageAlt: 'Line illustration of a technician inspecting a glass door hinge',
      intro: [
        'Glass does not always need to be replaced. Often adjusting a hinge, a handle or a door swing — or replacing a single panel — is enough to restore it.',
        'We agree what needs to be repaired in Riyadh, and tell you clearly what can and cannot be fixed.',
      ],
      sections: [
        {
          heading: 'Common cases',
          list: [
            'A glass door that does not close or align.',
            'A floor hinge that moves or sticks.',
            'A broken or loose handle.',
            'A lock that no longer works.',
            'A chipped or cracked panel.',
          ],
        },
        {
          heading: 'What to send us',
          paragraphs: [
            'Clearer information means a faster diagnosis. The most useful details are:',
          ],
          list: [
            'Photographs of the item from different angles.',
            'The approximate size of the item or opening.',
            'A short description of the problem and when it started.',
            'Whether the item was locally made or imported.',
          ],
        },
        {
          heading: 'Repair or replace?',
          paragraphs: [
            'We explain which option is more accurate and better value in each case. The answer depends on the condition of both glass and hardware.',
          ],
        },
        {
          heading: 'Working with broken units',
          list: [
            'Measuring the broken opening precisely.',
            'Matching the glass type where possible.',
            'Removing the broken unit safely.',
            'Reinstalling and testing the result.',
          ],
        },
        {
          heading: 'What affects the price',
          list: [
            'Whether it is an adjustment or a new panel.',
            'The size of the glass required.',
            'The glass type and thickness.',
            'The hardware that must be replaced.',
            'Distance to your location.',
          ],
        },
        {
          heading: 'How we handle a request',
          paragraphs: [
            'Send photos and a description. We will tell you whether a site visit is needed, then agree on the work.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Can you repair glass you did not install?',
          a: 'Yes, in most cases. We inspect the item and explain what is possible.',
        },
        {
          q: 'Are photos enough to diagnose the problem?',
          a: 'Photos usually help us understand it, but a final answer may need a site visit.',
        },
        {
          q: 'Can the existing door be repaired?',
          a: 'In many cases yes, for example by adjusting a hinge or handle. It depends on the inspection.',
        },
      ],
    },
  },
];

export function getService(id: RouteId): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
