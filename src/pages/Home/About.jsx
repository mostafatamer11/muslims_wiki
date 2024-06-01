import { motion } from "framer-motion";
import { Layout } from "../../components";

const About = () => {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 max-md:grid-rows-2 space-x-0 md:space-x-12">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
          }}
          className="section-img rounded-12 bg-green-100"
        >
          <img className="w-full h-full rounded-12" src="/muslim2.jpg" alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
          }}
          className="section-text flex flex-col gap-8 items-center justify-center"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-50 font-bold text-center md:text-right">
            نبذة عن مسلم ويكي
          </h1>
          <p className="text-center md:text-right font-light leading-8 md:leading-10 text-[14px] sm:text-sm lg:text-md max-w-[50ch] mx-auto">
            مسلم ويكي هو مصدر شامل للمعلومات حول الإسلام، يهدف إلى توفير محتوى
            دقيق وموثوق به لجميع المسلمين. نحن نسعى جاهدين لنكون بوابة شاملة
            للتعرف على الإسلام وتعاليمه، ونقدم معلومات عن مختلف جوانب الدين، بما
            في ذلك العقيدة والشريعة والتاريخ والثقافة
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
