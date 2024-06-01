import { Link } from "react-router-dom";
import { Button } from "../../components/";

const CTA = () => {
  return (
    <section className="flex flex-col gap-8 justify-center text-center w-full py-24 bg-green-300 gap-x-12">
      <h1 className="text-2xl lg:text-3xl text-yellow-100 font-bold">
        نرحب بكم
      </h1>
      <p className="max-w-[65ch] font-light leading-8 md:leading-10 text-[14px] sm:text-sm lg:text-md max-sm:mx-[2rem] mx-auto">
        “ندعو جميع المسلمين لزيارة مسلم ويكي والاطلاع على ما نقدمه. ونأمل أن
        نكون مصدرًا قيمًا لتعلم الإسلام وفهمه بشكل أفضل. تواصل معنا. لا تتردد في
        الاتصال بنا إذا كان لديك أي أسئلة أو استفسارات. شكرًا لك على وقتك!”
      </p>
      <span className="font-bold block mt-4">
        مسلم ويكي - بوابة شاملة للإسلام
      </span>
      <Button className="mx-auto mt-4" variant="yellow-outline">
        <Link to={"/sign/in"}>ابدأ الان</Link>
      </Button>
    </section>
  );
};

export default CTA;
