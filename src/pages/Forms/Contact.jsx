import { Button, ButtonGroup, Input, InputGroup } from "../../components";
import SocialLinks from "../../components/Layout/SocialLinks";
import "./styles.css";

const Contact = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 w-full min-h-screen">
      <div className="contact-form">
        <form action="">
          <InputGroup>
            <Input type="text" placeholder="اكتب اسمك هنا" id="name"></Input>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              placeholder="اكتب بريدك الالكتروني هنا"
              id="name"
            ></Input>
          </InputGroup>
          <InputGroup>
            <Input
              type="textarea"
              placeholder="اكتب رسالتك هنا"
              id="name"
            ></Input>
          </InputGroup>
          <ButtonGroup>
            <Button type="reset">امسح الكل</Button>
            <Button type="submit">ارسل</Button>
          </ButtonGroup>
        </form>
      </div>
      <div className="contact-info">
        <div>
          <h1 className="font-light text-2xl text-center md:text-right">
            تواصل معنا
          </h1>
          <p className="font-light text-center md:text-right mx-4 md:mx-auto maw-w-[65ch] text-xs md:text-sm lg:text-md leading-8">
            رضاؤكم هدفنا.. لذا نسعى للوصول اليكم في اي وقت و في كل مكان
            <br />
            :للاستفسارات والشكاوي تواصل معنا
          </p>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
