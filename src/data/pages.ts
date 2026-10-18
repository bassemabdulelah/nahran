import type { Faq } from './services';

export interface PageSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface PageContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: PageSection[];
  faqs?: Faq[];
}

/* ---------------------------- Projects ---------------------------- */
export interface ProjectsContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  notice: { heading: string; body: string };
  categories: string[];
  faqs: Faq[];
}

export const PROJECTS: Record<'ar' | 'en', ProjectsContent> = {
  ar: {
    metaTitle: 'صور أعمال زجاج سكريت بالرياض | معرض الأعمال',
    metaDescription:
      'معرض لأعمال زجاج سكريت في الرياض: واجهات وأبواب وقواطع وشاورات. نعرض الأعمال الحقيقية عند اكتمال أرشيف الصور، مع تصنيف واضح لكل عمل.',
    h1: 'معرض أعمالنا في الرياض',
    intro: [
      'نعرض في هذه الصفحة أعمالنا حسب نوع الخدمة، حتى ترى الصورة الواقعية للمنتج النهائي قبل اتخاذ قرارك.',
      'الصور التي نعرضها هي صور حقيقية من مشاريعنا. وإذا لم تتوفر صورة لنوع معيّن بعد، نوضّح ذلك بدلًا من استخدام صورة عامة ونسبتها إلينا.',
    ],
    notice: {
      heading: 'أرشيف الصور قيد التحديث',
      body:
        'لم تُضَ بعد الصور الحقيقية إلى هذا الأرشيف. سنستبدل المساحات المخصّصة بصور فعلية من أعمالنا حال تجهيزها، دون استخدام صور عامة أو منسوبة إلى غيرنا.',
    },
    categories: ['واجهات زجاج', 'أبواب زجاج', 'قواطع مكاتب', 'شاورات وكبائن', 'غرف زجاجية', 'درابزين زجاج', 'مرايا'],
    faqs: [
      { q: 'هل الصور حقيقية؟', a: 'نعم. ننشر فقط صور أعمالنا الحقيقية، ونوضّح ذلك في حال عدم توفر صورة لنوع معيّن.' },
      { q: 'كيف أطلب عملاً مشابهًا لما رأيته؟', a: 'أرسل لنا صورة العمل والقياسات التقريبية للمكان، وسنوضّح ما يمكن تنفيذه.' },
      { q: 'هل يمكن تصوير العمل الذي دفعتم إليه؟', a: 'التصوير يعتمد على ترتيب مسبق مع العميل. أخبرنا إن رغبت بذلك عند الطلب.' },
    ],
  },
  en: {
    metaTitle: 'Glass Work Gallery in Riyadh | Projects',
    metaDescription:
      'A gallery of tempered glass work in Riyadh: facades, doors, partitions and showers. We publish real project photos with a clear category.',
    h1: 'Our Work in Riyadh',
    intro: [
      'We show our work by service type so you can see the finished result before deciding.',
      'Everything we publish is a real photograph of our own work. Where a category has no photo yet, we say so instead of using a stock image.',
    ],
    notice: {
      heading: 'Photo archive in progress',
      body:
        'Real project photos have not been added to this archive yet. We will replace the reserved spaces with genuine photos of our own work; no stock imagery is presented as ours.',
    },
    categories: [
      'Glass facades',
      'Glass doors',
      'Office partitions',
      'Showers & cabins',
      'Glass rooms',
      'Glass railings',
      'Mirrors',
    ],
    faqs: [
      { q: 'Are the photos real?', a: 'Yes. We only publish photographs of our own work, and we say so when a category has no photo yet.' },
      { q: 'How do I ask for work like what I saw?', a: 'Send us the photo and the approximate size of your space and we will explain what can be done.' },
      { q: 'Can a completed job be photographed?', a: 'Photography depends on arranging it with the customer. Mention it when you enquire.' },
    ],
  },
};

/* ---------------------------- Pricing ---------------------------- */
export const PRICING: Record<'ar' | 'en', PageContent & { factors: Array<{ title: string; body: string }> }> = {
  ar: {
    title: 'دليل أسعار زجاج سكريت',
    metaTitle: 'سعر متر زجاج سكريت بالرياض | دليل العوامل المؤثرة في التكلفة',
    metaDescription:
      'شرح عملي للعوامل التي تحدد سعر متر زجاج سكريت بالرياض: الأبعاد، نوع الزجاج وسماكته، الإكسسوارات، التصميم وظروف التركيب، مع المعلومات التي تسرّع التسعير.',
    h1: 'ما الذي يحدد سعر زجاج سكريت؟',
    intro: [
      'لا يوجد سعر واحد لكل أنواع الزجاج، لأن التكلفة تتبع التفاصيل. لوح صغير في حمام يختلف كثيرًا عن واجهة مبنى كاملة، حتى لو كان النوع نفسه.',
      'هذا الدليل يشرح العوامل التي تغيّر السعر، حتى تتمكن من مقارنة العروض بثقة.',
    ],
    factors: [
      { title: 'الأبعاد والمساحة', body: 'السعر يبدأ من المساحة الكلية (العرض × الارتفاع) وعدد الألواح. المساحات الكبيرة توزّع التكلفة بشكل مختلف عن القطع الصغيرة.' },
      { title: 'سماكة الزجاج', body: 'يختلف السعر بين 6 و8 و10 و12 ملم وأكثر. الاختيار يعتمد على الاستخدام وطريقة التثبيت.' },
      { title: 'نوع الزجاج', body: 'الزجاج الشفاف والملوّن والسطحي (فرستد) والعاكس تختلف في التصنيع، وكذلك الزجاج المزدوج الذي يعطي عزلًا أفضل.' },
      { title: 'الإكسسوارات والتجهيزات', body: 'المفصلات والمقابض والأقفال والملحقات تتباين في الجودة والتحمل، وهذا ينعكس على التكلفة.' },
      { title: 'تعقيد التصميم', body: 'الدرج والأشكال غير المستقيمة والفتحات المتعددة تحتاج قياسًا وتصنيعًا أدق.' },
      { title: 'ظروف التركيب', body: 'ارتفاع الموقع وصعوبة الوصول والتنقل والإزالة والتشطيب كلها عوامل تؤثر في التسعير.' },
    ],
    sections: [
      {
        heading: 'معلومات تساعدنا على تسعيرك بدقة',
        paragraphs: ['كلما كانت المعلومات أوضح، كان العرض أدق. هذه أهم ما نطلبه:'],
        list: [
          'الطول والعرض أو الارتفاع للمساحة المطلوبة.',
          'نوع الخدمة: باب، قاطع، شاور، واجهة… إلخ.',
          'صور للمكان من زوايا مختلفة.',
          'ما إذا كان المطلوب زجاجاً فقط أم مع التركيب.',
          'هل المكان جديد أم قائم؟',
        ],
      },
      {
        heading: 'لماذا لا ننشر سعرًا ثابتًا؟',
        paragraphs: [
          'لأن حجم العمل وتفاصيله تختلف من حالة إلى أخرى، يصبح السعر الرقمي المنشور مضللاً. نضمن بدلاً من ذلك خطوات واضحة، منها القياس قبل التصنيع، ونوضّح كل بند في عرض السعر.',
        ],
      },
    ],
    faqs: [
      { q: 'هل السعر يشمل التركيب؟', a: 'يوضّح ذلك في العرض: هل السعر للخام والتصنيع فقط أم يشمل التركيب أيضًا.' },
      { q: 'هل يمكن تخفيض السعر؟', a: 'يعتمد على اختيار الخامات. يمكننا توضيح الخيارات المختلفة التي تؤثر في التكلفة.' },
      { q: 'كيف أطلب عرض سعر؟', a: 'أرسل عبر واتساب أو اتصل، واذكر النوع والمقاس والصور إن أمكن.' },
    ],
  },
  en: {
    title: 'Tempered glass price guide',
    metaTitle: 'Tempered Glass Price in Riyadh | What Affects the Cost',
    metaDescription:
      'A practical guide to what determines the price of tempered glass in Riyadh: size, glass type and thickness, hardware, design complexity and installation conditions.',
    h1: 'What determines the price of tempered glass?',
    intro: [
      'There is no single price for every type of glass, because the cost follows the details. A small shower panel and a full building facade are not comparable, even in the same material.',
      'This guide explains the factors that move the price, so you can compare quotes with confidence.',
    ],
    factors: [
      { title: 'Size and area', body: 'Pricing starts from the total area (width × height) and the number of panels. Large areas distribute cost differently from small components.' },
      { title: 'Glass thickness', body: '6, 8, 10, 12 mm and above are priced differently. The right choice depends on the use and the fixing method.' },
      { title: 'Glass type', body: 'Clear, tinted, frosted and reflective glass each involve different processing; so does double glazing, which improves insulation.' },
      { title: 'Hardware and fittings', body: 'Hinges, handles, locks and accessories vary in quality and load rating, which is reflected in the cost.' },
      { title: 'Design complexity', body: 'Curves, non-standard shapes and multiple openings need more careful measuring and fabrication.' },
      { title: 'Installation conditions', body: 'Height, access, transport, removal and finishing all affect the installation cost.' },
    ],
    sections: [
      {
        heading: 'Information that helps us price accurately',
        paragraphs: ['The clearer the information, the more accurate the quote. This is what we usually ask for:'],
        list: [
          'The length and height of the required area.',
          'The service type: door, partition, shower, facade, etc.',
          'Photographs of the space from different angles.',
          'Whether you need the glass only or with installation.',
          'Whether the space is new or already in use.',
        ],
      },
      {
        heading: 'Why we do not publish a fixed number',
        paragraphs: [
          'Because every job differs, a single published figure would be misleading. Instead we keep the process transparent: a site measurement before manufacturing, and a quote that itemises each element.',
        ],
      },
    ],
    faqs: [
      { q: 'Does the price include installation?', a: 'The quote states whether it covers the material only or also installation.' },
      { q: 'Can the price be reduced?', a: 'It depends on the materials you choose. We can explain the options that affect the cost.' },
      { q: 'How do I request a quote?', a: 'Message us on WhatsApp or call, with the type, size and photos if possible.' },
    ],
  },
};

/* ---------------------------- About ---------------------------- */
export const ABOUT: Record<'ar' | 'en', PageContent> = {
  ar: {
    title: 'من نحن',
    metaTitle: 'من نحن | زجاج سكريت بالرياض',
    metaDescription:
      'تعرّف على نشاط زجاج سكريت في الرياض: ما نقدّمه من تفصيل وتركيب، وكيف نتعامل مع الطلب والقياس، والمعلومات التي نعتمدها في كل خطوة.',
    h1: 'من نحن',
    intro: [
      'نحن نشاط متخصص في تفصيل وتركيب الزجاج السكريت في مدينة الرياض، ونعمل على الواجهات والأبواب والقواطع والشاورات والدرابزين والمرايا، إضافة إلى الصيانة والإصلاح.',
      'لا نعد بجوائز أو أرقام غير حقيقية. ما نقدّمه هو عمل واضح، وتسعير مبني على التفاصيل، ومعلومات صريحة عن كل خدمة.',
    ],
    sections: [
      {
        heading: 'ما الذي ننجزه',
        paragraphs: ['نتولى الجوانب كاملة من القياس حتى التشغيل، ونجيب عن أسئلتك قبل البدء.'],
        list: [
          'تفصيل الألواح الزجاجية حسب المقاس.',
          'توفير الإكسسوارات والتجهيزات المناسبة.',
          'التركيب والتشغيل والتجربة.',
          'الصيانة والإصلاح للأجزاء المتاحة.',
        ],
      },
      {
        heading: 'كيف نتعامل مع الطلب',
        list: [
          'نتفق على المطلوب والمقاس.',
          'نرسل تصورًا واضحًا للتفاصيل.',
          'نجري القياس الفعلي قبل التصنيع.',
          'ننفّذ التركيب ثم نتحقق من النتيجة.',
        ],
      },
      {
        heading: 'منطقة الخدمة',
        paragraphs: ['نخدم مدينة الرياض. وإذا كنت خارج الرياض، أخبرنا وسنوضّح إمكانية الخدمة من عدمها دون مواربة.'],
      },
    ],
    faqs: [
      { q: 'ما هي خدماتكم؟', a: 'واجهات وأبواب وقواطع زجاجية، شاورات وكبائن حمامات، غرف زجاجية، درابزين، مرايا، وصيانة وإصلاح.' },
      { q: 'هل تعملون خارج الرياض؟', a: 'منطقة الخدمة الحالية هي الرياض. تواصل معنا لتأكيد أي حالة خاصة.' },
      { q: 'كيف أبدأ؟', a: 'الاتصال أو واتساب، وذكر نوع العمل والمقاس وصور المكان.' },
    ],
  },
  en: {
    title: 'About',
    metaTitle: 'About Us | Tempered Glass in Riyadh',
    metaDescription:
      'Learn about our tempered glass service in Riyadh: what we design and install, how we handle an enquiry and the information we rely on at each step.',
    h1: 'About Us',
    intro: [
      'We are a specialist tempered glass supply and installation service working in Riyadh — facades, doors, partitions, showers, railings and mirrors, along with maintenance and repair.',
      'We do not advertise awards or invented numbers. What we offer is clear work, pricing built on the details, and honest information about each service.',
    ],
    sections: [
      {
        heading: 'What we deliver',
        paragraphs: ['We handle the work from measurement to handover, and answer your questions before we start.'],
        list: [
          'Cutting and preparing glass panels to size.',
          'Supplying suitable fittings and hardware.',
          'Installation, adjustment and testing.',
          'Maintenance and repair where applicable.',
        ],
      },
      {
        heading: 'How we handle an enquiry',
        list: [
          'Agree on what is needed and the size.',
          'Send a clear outline of the details.',
          'Take the actual measurement before fabrication.',
          'Install, then check the result.',
        ],
      },
      {
        heading: 'Service area',
        paragraphs: ['We serve Riyadh city. If you are outside Riyadh, ask us and we will state clearly whether we can help.'],
      },
    ],
    faqs: [
      { q: 'What services do you provide?', a: 'Glass facades, doors and partitions, shower enclosures, glass rooms, railings, mirrors, and maintenance and repair.' },
      { q: 'Do you work outside Riyadh?', a: 'Our current service area is Riyadh. Contact us to confirm any special case.' },
      { q: 'How do I start?', a: 'Call or message on WhatsApp with the service type, size and photos of the location.' },
    ],
  },
};

/* ---------------------------- Privacy ---------------------------- */
export const PRIVACY: Record<'ar' | 'en', PageContent> = {
  ar: {
    title: 'سياسة الخصوصية',
    metaTitle: 'سياسة الخصوصية',
    metaDescription: 'سياسة الخصوصية لهذا الموقع: ما نجمعه، ولماذا، وكيف نتعامل مع الاتصال الهاتفي وواتساب وبيانات الاستخدام.',
    h1: 'سياسة الخصوصية',
    intro: [
      'تهدف هذه السياسة إلى توضيح طبيعة البيانات المرتبطة باستخدام هذا الموقع وطريقة التعامل معها.',
    ],
    sections: [
      {
        heading: 'لا توجد نماذج تجميع بيانات',
        paragraphs: ['الموقع لا يحتوي على نماذج تواصل أو طلب عرض سعر أو حسابات أو دفع. لا نجمع أي بيانات تُدخلها في الموقع لأنه لا يوجد حقل لإدخالها.'],
      },
      {
        heading: 'الاتصال المباشر',
        paragraphs: ['يعتمد التواصل على الاتصال الهاتفي أو واتساب. عند استخدامك لأي منهما، تخضع المحادثة لسياسة واتساب أو شبكة الاتصالات الخاصة بك، ولسنا مسؤولين عن تلك المنصات.'],
      },
      {
        heading: 'بيانات الاستضافة والسجلات',
        paragraphs: ['يُستضاف الموقع على Netlify. وقد تسجّل خوادم الاستضافة بيانات تقنية (مثل عنوان IP ونوع المتصفح والوقت) لأغراض التشغيل والأمان، وفق سياسة Netlify.'],
      },
      {
        heading: 'ملفات تعريف الارتباط (Cookies)',
        paragraphs: ['لا نستخدم حاليًا ملفات تعريف ارتباط للإعلانات أو التتبّع، ولا نستخدم أدوات تحليل إحصائي. وإذا أُضيفت لاحقًا، فسيحدَث هذا المستند وتم تنبيهك في حال وجب ذلك.'],
      },
      {
        heading: 'مصادر خارجية',
        paragraphs: ['قد يحتوي الموقع على روابط لمواقع خارجية. لا نتحكم في ممارسات الخصوصية لتلك المواقع.'],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    metaTitle: 'Privacy Policy',
    metaDescription: 'This privacy policy explains what this website collects, why, and how phone and WhatsApp contact and technical data are handled.',
    h1: 'Privacy Policy',
    intro: ['This policy explains the data associated with using this website and how we handle it.'],
    sections: [
      {
        heading: 'No data-collection forms',
        paragraphs: ['This website has no contact form, quote form, accounts or payments. We therefore do not collect data you would enter into a form, because no such form exists.'],
      },
      {
        heading: 'Direct contact',
        paragraphs: ['Contact is by phone or WhatsApp. When you use either, that conversation is subject to WhatsApp or your operator and we are not responsible for those platforms.'],
      },
      {
        heading: 'Hosting and server logs',
        paragraphs: ['This site is hosted on Netlify. The hosting servers may record technical data such as IP address, browser type and time of request for operation and security, under Netlify’s own policy.'],
      },
      {
        heading: 'Cookies',
        paragraphs: ['We currently use no advertising or tracking cookies and no analytics tools. If that changes, this document will be updated and, where required, you will be notified.'],
      },
      {
        heading: 'External links',
        paragraphs: ['The website may link to external sites. We do not control their privacy practices.'],
      },
    ],
  },
};
