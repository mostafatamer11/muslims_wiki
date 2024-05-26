import { motion } from "framer-motion";
import { Layout } from "../../components";

const Offers = () => {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2 space-x-0 md:space-x-12 lg:space-x-28">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
          }}
          className="section-text flex flex-col justify-center"
        >
          <h1 className="text-2xl lg:text-3xl md:text-right text-center text-yellow-100 font-bold mb-8">
            ما نقدمه
          </h1>
          <p className="text-[14px] text-center md:text-right md:text-sm lg:text-md text-yellow-100 mb-8">
            :نقدم مجموعة واسعة من الموارد، بما في ذلك
          </p>
          <ul className="text-center md:text-right grid md:gap-4">
            <li className="text-[14px] md:text-sm lg:text-md leading-10">
              مقالات شاملة حول مختلف مواضيع الإسلام، من العقائد الأساسية إلى
              الممارسات اليومية
            </li>
            <li className="text-[14px] md:text-sm lg:text-md leading-10">
              .ترجمات دقيقة للقرآن الكريم والحديث النبوي الشريف
            </li>
            <li className="text-[14px] md:text-sm lg:text-md leading-10">
              .أدوات تعليمية لمساعدة المسلمين على تعلم المزيد عن دينهم
            </li>
            <li className="text-[14px] md:text-sm lg:text-md leading-10">
              منتدى للمناقشة حيث يمكن للمسلمين من جميع أنحاء العالم التواصل وطرح
              الأسئلة ومشاركة الأفكار
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
          }}
          className="section-img flex flex-col justify-center items-center h-full"
        >
          <img
            className="bg-black-100 w-full h-full rounded-12"
            src="/muslim.png"
            alt=""
          />
        </motion.div>
      </section>
    </Layout>
  );
};

export default Offers;
