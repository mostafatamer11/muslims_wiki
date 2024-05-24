import MainBackground from "/hero-banner.png";
import Overlay from "../components/Overlay";
import Button from "../components/Button";
import Layout from "../components/Layout";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${MainBackground})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        className="hero-section"
      >
        <Overlay className={"flex flex-col justify-center items-center"}>
          <motion.h1
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-4xl font-bold tracking-[-5px] text-yellow-100"
          >
            أهلا بكم في مسلم ويكي
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-[28px] tracking-[-11%] mt-4"
          >
            أفضل مدونة في الوطن العربي
          </motion.p>
          <Button>ابدأ الآن</Button>
        </Overlay>
      </main>

      <Layout>
        <section className="grid grid-cols-2 space-x-12">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.75,
            }}
            exit={{
              x: -150,
              opacity: 0,
              transition: {
                delay: 0,
                duration: 0.25,
              },
            }}
            className="section-img rounded-12 aspect-[4/5] bg-yellow-100"
          >
            <img
              className="w-full h-full rounded-12"
              src="/64f9e5d07faf0e7d51159bc8_withmeta.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.75,
            }}
            exit={{
              x: 150,
              opacity: 0,
              transition: {
                delay: 0,
                duration: 0.25,
              },
            }}
            className="section-text flex flex-col gap-8 items-center justify-center"
          >
            <h1 className="text-4xl text-green-50 font-bold text-right">
              نبذة عن مسلم ويكي
            </h1>
            <p className="text-right leading-10 max-w-[50ch] ms-[auto]">
              مسلم ويكي هو مصدر شامل للمعلومات حول الإسلام، يهدف إلى توفير محتوى
              دقيق وموثوق به لجميع المسلمين. نحن نسعى جاهدين لنكون بوابة شاملة
              للتعرف على الإسلام وتعاليمه، ونقدم معلومات عن مختلف جوانب الدين،
              بما في ذلك العقيدة والشريعة والتاريخ والثقافة
            </p>
          </motion.div>
        </section>
        <section className="flex flex-col justify-center text-center space-x-12">
          <h1>نرحب بكم</h1>
          <p>“ندعو جميع المسلمين لزيارة مسلم ويكي والاطلاع على ما نقدمه. ونأمل أن نكون مصدرًا قيمًا لتعلم الإسلام وفهمه بشكل أفضل. تواصل معنا. لا تتردد في الاتصال بنا إذا كان لديك أي أسئلة أو استفسارات. شكرًا لك على وقتك!”</p>
          <span>مسلم ويكي - بوابة شاملة للإسلام</span>
          <Button>ابدأ الآن</Button>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
