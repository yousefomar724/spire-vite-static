import photo from '/imgs/heroSection.png'
import { Error, HeroPhoto, Loader } from '../components'
import { pageTransition } from '../animation'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import { aboutObjectivesData } from '../data'

const About = () => {
  return (
    <motion.div
      className='md:py-10'
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <HeroPhoto photo={photo} title=' عن المعهد' />
      <div className='max-w-5xl m-auto py-10 flex flex-col gap-4 px-4'>
        <h4 className='text-xl text-darkBlue-900 border-b-2 border-darkBlue-900 w-fit m-auto md:mx-0 py-2 px-3 md:px-0 '>
          نبذة عن المعهد
        </h4>
        <div>
          <h2 className='text-xl md:text-2xl font-bold mt-6 text-center'>
            المعهد السعودي التقني للطاقة المتجددة
          </h2>
          <p className='leading-8 font-medium mt-4'>
            استنادا إلى الأحكام الواردة ضمن القواعد التنظيمية الخاصة بإنشاء
            وحدات التدريب غير الربحية الصادرة بموجب قرار مجلس الوزراء رقم (17)
            وتاريخ 15/01/1430هـ، ، والتي تقضي باختصاص المؤسسة العامة للتدريب
            التقني والمهني بإصدار التراخيص للمعاهد والأكاديميات غير الربحية ،
            وبموجب هذا النظام تم إنشاء معهد يسمى " المعهد السعودي التقني للطاقة
            المتجددة" كوحدة تدريب غير ربحية مرخص لها من قبل المؤسسة العامة
            للتدريب التقني والمهني بموجب الترخيص رقم (270222) بتاريخ
            25/7/1443هـ، وتكون لها شخصية اعتبارية وذمة مالية مستقلة، وتحت مظلة
            المركز الوطني للشراكات الاستراتيجية.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>الغاية من إنشاء المعهد</h4>
          <p className='leading-8 font-medium'>
            يعمل المعهد وفق استراتيجية معاهد الشركات الاستراتيجية للتدريب
            المبتدئ بالتوظيف عللى تخصصات الطاقة المتجددة لسد احتياج الشركاء
            الاستراتيجين المشغلين لمشروعات الطاقة المتجددة في المملكة.لا
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>حوكمة العمل</h4>
          <p className='leading-8'>
            يعتمد التدريب على مشاركة قطاع الأعمال في العملية التدريبية من خلال
            تحديد المهارات المطلوبة وتطوير المناهج التدريبية وأساليب الجودة
            والمشاركة في اختيار مزود الخدمات التدريبية, بينما تتولى المؤسسة
            العامة للتدريب التقني والمهني توفير البينة التحتية للتدريب ويساه
            صندوق تنمية المهوارد البشرية “هدف” بتغطية تكاليف العملية التدريبة ,
            حيث إن جميع المتدربين بالمعاهد يتم تسجيلهم بالمؤسسة العامة للتأمينات
            الاجتماعية من اليوم الأول للتدريب وإلحاقهم بالعمل مباشرة بعد التخرج
            من المعهد.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>مقر المعهد</h4>
          <p className='leading-[2.5rem]'>
            تم اختيار مدينة سكاكا في منطقة الجوف باعتبارها تحتضن باكورة مشروعات
            الطاقة المتجددة في المملكة( محطة سكاكا للطاقة الشمسية ومحطة طاقة
            رياح دومة الجندل ). وقربها من مشروعات أخرى في المنطقة الشمالية
            والشمالية الغربية, ووجود البنية التحتية المناسبة لتشغيل المعهد ودعمه
            لوجستيا.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>الرؤية:</h4>
          <p className='text-darkBlue-900 leading-[2.5rem]'>
            أن نكون وجهة التدريب الأولى عالميا بمجال الطاقة المتجددة و
            المستدامة.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>الرسالة:</h4>
          <p className='text-darkBlue-900 leading-[2.5rem]'>
            مواكبة تطور تقنية الطاقة المتججدة والمستدامة وتأهيل الكوادر البشرية
            من خلال نهج متعدد التخصصات والبرامج وفق أعلى المعايير العالمية.
          </p>
        </div>
        <div>
          <h4 className='text-xl font-bold mt-6'>الأهداف:</h4>
          <ul className='list-decimal text-darkBlue-900 flex flex-col gap-4 px-5 mt-5'>
            {aboutObjectivesData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About
