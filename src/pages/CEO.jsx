import photo from '/imgs/heroSection.png'
import chairman from '/imgs/ceo.png'
import { HeroPhoto } from '../components'
import { pageTransition } from '../animation'
import { motion } from 'framer-motion'

const CEO = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='md:py-10'
    >
      <HeroPhoto photo={photo} title='كلمة رئيس مجلس الادارة' />
      <div className='max-w-6xl m-auto py-10 flex flex-col gap-4 px-5'>
        <h1 className='text-2xl mx-auto text-darkBlue-900 md:mx-0 border-b-2 my-5 w-fit pb-2 border-darkBlue-900'>
          كلمة رئيس مجلس الادارة
        </h1>

        <div className='flex justify-center flex-wrap md:flex-nowrap md:gap-32 gap-10 mb-4'>
          <div className='md:w-[300px] w-[200px]  flex items-center flex-col'>
            <img src={chairman} alt='ceo' />
            <div className='py-2 rounded-lg px-4 text-xl text-center bg-darkBlue-900 text-white -skew-x-[30deg] -translate-x-4 -translate-y-2'>
              <p className='skew-x-[30deg] flex flex-col'>
                م. ماجد بن مهدي الرفاعي
              </p>
            </div>
          </div>
          <div className='w-fit leading-8 text-center md:text-right flex flex-col gap-4'>
            <p>
              يسعدني بالإنابة عن شركاء النجاح أن أرحب بكم في الموقع الرسمي
              للمعهد السعودي التقني للطاقة المتجددة (سباير). وأود بداية أن أتقدم
              بالشكر الجزيل لصاحب السمو الملكي الأمير عبد العزيز بن سلمان بن عبد
              العزيز؛ وزير الطاقة، على موافقته لانضمام شركاء النجاح كأعضاء في
              مجلس الإدارة، وإلى صاحب السمو الملكي الأمير فيصل بن نواف بن عبد
              العزيز؛ أمير منطقة الجوف، رئيس مجلس إدارة جمعية الجوف للطاقة
              المتجددة على دعمه واهتمامه بتأسيس المعهد في منطقة الجوف، كما أتوجه
              بالشكر لمعالي محافظ المؤسسة العامة للتدريب التقني والمهني الدكتور
              أحمد بن فهد الفهيد؛ على متابعته ودعمه لمراحل الترخيص وتهيئة البنية
              التحتية.
            </p>
            <p>
              إن الاهتمام بتأسيس سباير يأتي منطلقاً من توجّه الدولة نحو
              الاستثمار في الطاقة المتجددة والتوسّع في مشاريع انتاجها لتحقيق
              الريادة العالمية وخفض انبعاثات الكربون، الأمر الذي يتطلّب تأهيل
              وتدريب شباب الوطن لإدارة وتشغيل وصيانة هذه المشاريع، وإكسابهم
              المهارات والمعارف وفق أعلى معايير الجودة والكفاءة المهنية.
            </p>
            <p>
              لقد كانت رؤية المؤسسين أن يكون سباير رائداً على مستوى التدريب في
              مجال الطاقة المتجددة لتمكين الشباب من المساهمة في صناعة طاقة
              المستقبل، وتتمحور استراتيجيتنا في الوصول إلى هذه الريادة من خلال
              التعاون مع أفضل مصادر ووسائل التدريب داخل المملكة وخارجها، وكلنا
              ثقة بأن ترتقي مخرجاتنا إلى تطلعات شركائنا في سوق العمل.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CEO
