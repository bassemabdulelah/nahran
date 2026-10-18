import type { Faq } from './services';

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  badges: string[];
  servicesIntro: string;
  why: Array<{ icon: string; title: string; body: string }>;
  process: Array<{ title: string; body: string }>;
  pricingIntro: string;
  priceFactors: string[];
  faqs: Faq[];
}

export const HOME: Record<'ar' | 'en', HomeContent> = {
  ar: {
    metaTitle: 'زجاج سكريت بالرياض | تفصيل وتركيب واجهات وأبواب',
    metaDescription:
      'تفصيل وتركيب زجاج سكريت في الرياض: واجهات، أبواب، قواطع مكاتب، شاورات، غرف زجاجية، درابزين، مرايا وصيانة. اتصل بنا مباشرة أو عبر واتساب.',
    eyebrow: 'زجاج سكريت في الرياض',
    h1: 'زجاج سكريت بالرياض للواجهات والأبواب والتصاميم الزجاجية',
    lede:
      'نفصّل ونركّب الزجاج السكريت للمنازل والمكاتب والمحلات في الرياض: واجهات، أبواب، قواطع مكاتب، شاورات وكبائن حمامات، غرف زجاجية، درابزين ومرايا، إضافة إلى الصيانة والإصلاح. القياس قبل التصنيع، وتسعير واضح يتبع التفاصيل.',
    badges: ['نخدم مدينة الرياض', 'قياس قبل التصنيع', 'زجاج سكريت آمن', 'تواصل مباشر بلا نماذج'],
    servicesIntro:
      'نغطّي احتياجات المساكن والشركات والمحلات: من الواجهة والباب إلى القاطع والدرابزين والمرآة، مع توضيح الخيارات قبل التنفيذ.',
    why: [
      { icon: 'ruler', title: 'قياس دقيق قبل التنفيذ', body: 'لا نصنع قبل القياس الفعلي، لأن دقة المقاس هي الفرق بين نتيجة مرتّبة وباب لا يغلق جيدًا.' },
      { icon: 'shield', title: 'زجاج سكريت مناسب لكل استخدام', body: 'نساعدك على اختيار السماكة والنوع المناسبين للواجهة أو الباب أو الكابينة، بدل الاعتماد على نوع واحد للجميع.' },
      { icon: 'ruler2', title: 'تسعير مبني على التفاصيل', body: 'نوضّح العوامل التي تغيّر السعر — الأبعاد والسماكة والإكسسوارات وظروف التركيب — بدل إطلاق رقم مضلّل.' },
      { icon: 'users', title: 'تواصل مباشر وسريع', body: 'لا نماذج ولا خطوات وسيطة: اتصال هاتفي أو واتساب مباشر مع من ينفّذ العمل.' },
    ],
    process: [
      { title: 'تواصل ووصف', body: 'أخبرنا بالخدمة المطلوبة والمكان، وأرسل صورًا إن أمكن.' },
      { title: 'تفصيل وتوضيح', body: 'نوضّح الخيارات والمقاسات وما يناسب استخدامك.' },
      { title: 'قياس فعلي', body: 'نجري القياس في الموقع قبل التصنيع للتأكد من الدقة.' },
      { title: 'تركيب ومتابعة', body: 'ننفّذ التركيب ونتحقق من النتيجة، ونوضّح أي ملاحظة بعد ذلك.' },
    ],
    pricingIntro:
      'لا يوجد سعر واحد لكل أنواع الزجاج، لأن التكلفة تتبع الأبعاد ونوع الزجاج وسماكته والتجهيزات وظروف التركيب. نوضّح ذلك بالتفصيل في دليل الأسعار.',
    priceFactors: [
      'المساحة الكلية وعدد الألواح',
      'سماكة الزجاج ونوعه',
      'المفصلات والمقابض والأقفال',
      'تعقيد التصميم والزوايا',
      'ظروف التركيب والوصول للموقع',
      'هل المطلوب مع التركيب أم بدونه',
    ],
    faqs: [
      {
        q: 'ما الذي يؤثر في سعر زجاج سكريت؟',
        a: 'أهم العوامل: المساحة، وسماكة الزجاج ونوعه، ونوع التجهيزات، وتعقيد التصميم، وظروف التركيب. ولذلك يختلف السعر من حالة لأخرى.',
      },
      {
        q: 'كيف أختار باب زجاجي مناسبًا؟',
        a: 'يعتمد الاختيار على عرض الفتحة ومساحة الحركة والمكان. الباب المفرد مناسب للفتحات الضيقة، والمزدوج أو السحاب للفتحات الأوسع.',
      },
      {
        q: 'ما المعلومات المفيدة عند طلب عرض سعر؟',
        a: 'المقاس التقريبي، ونوع الخدمة، وصور للمكان، وهل المطلوب زجاج مع تركيب أم بدونه.',
      },
      {
        q: 'ما العوامل المؤثرة في تركيب واجهة زجاجية؟',
        a: 'قياس الفتحة وارتفاعها، وتوزيع الألواح، وطريقة التثبيت، وتعويض التمدد الحراري، ومنع تسرب الماء. نقيّم ذلك قبل البدء.',
      },
      {
        q: 'ما المناطق التي تخدمونها؟',
        a: 'نخدم مدينة الرياض حاليًا. وإن كنت خارج الرياض، اسألنا وسنوضّح إمكانية الخدمة.',
      },
      {
        q: 'كيف أتواصل معكم؟',
        a: 'الاتصال المباشر على الرقم، أو واتساب. لا يوجد نموذج تواصل في الموقع.',
      },
    ],
  },
  en: {
    metaTitle: 'Tempered Glass in Riyadh | Facades & Doors Installation',
    metaDescription:
      'Tempered glass supply and installation in Riyadh: facades, doors, office partitions, showers, glass rooms, railings, mirrors and repairs. Call or message on WhatsApp.',
    eyebrow: 'Tempered glass in Riyadh',
    h1: 'Tempered glass in Riyadh for facades, doors and glass interiors',
    lede:
      'We supply and install tempered glass in Riyadh for homes, offices and shops: facades, doors, office partitions, shower enclosures, glass rooms, railings and mirrors, plus maintenance and repair. Measured before fabrication, with pricing that follows the details.',
    badges: ['Serving Riyadh', 'Measured before fabrication', 'Safety glass', 'No forms — direct contact'],
    servicesIntro:
      'We cover facades, doors, partitions, showers, glass rooms, railings and mirrors, and we explain every option before work starts.',
    why: [
      { icon: 'ruler', title: 'Measured before we fabricate', body: 'We never cut glass before a real measurement, because accuracy is what separates a clean result from a door that will not close.' },
      { icon: 'shield', title: 'Right glass for the job', body: 'We help you choose thickness and type for each use — facade, door, partition or shower — instead of one size for everything.' },
      { icon: 'layers', title: 'Pricing built on details', body: 'No permanent “per metre” figure that does not fit your project. We explain what actually moves the cost.' },
      { icon: 'users', title: 'Direct contact', body: 'No forms and no middle steps: call or message us directly and speak to the person doing the work.' },
    ],
    process: [
      { title: 'Get in touch', body: 'Tell us what you need and where, and send photos if you have them.' },
      { title: 'Specify', body: 'We outline the options and dimensions that suit your use.' },
      { title: 'Measure', body: 'We take the actual measurement on site before fabrication.' },
      { title: 'Install', body: 'We install, check the result and explain anything that follows.' },
    ],
    pricingIntro:
      'There is no single price for glass, because the cost depends on size, type and thickness, hardware and installation conditions. The price guide explains each factor.',
    priceFactors: [
      'Total area and number of panels',
      'Glass thickness and type',
      'Hinges, handles and locks',
      'Design complexity and angles',
      'Installation access and height',
      'Material only, or installed',
    ],
    faqs: [
      {
        q: 'What affects the price of tempered glass?',
        a: 'The main factors are area, glass thickness and type, the hardware, design complexity and installation conditions — which is why the price differs case to case.',
      },
      {
        q: 'How do I choose a suitable glass door?',
        a: 'It depends on the opening width, the movement space and the location. A single door suits a narrow opening; a double or sliding door suits a wider one.',
      },
      {
        q: 'What information is useful when requesting a quotation?',
        a: 'The approximate size, the service type, photos of the location and whether you want material with installation.',
      },
      {
        q: 'What affects installing a glass facade?',
        a: 'The size and height of the opening, the panel layout, the fixing system, thermal expansion and water drainage — all of which we consider before starting.',
      },
      {
        q: 'Which areas do you serve?',
        a: 'We currently serve Riyadh. If you are outside Riyadh, ask us and we will say clearly whether we can help.',
      },
      {
        q: 'How do I contact you?',
        a: 'Call the number directly or message on WhatsApp. There is no contact form on this website.',
      },
    ],
  },
};
