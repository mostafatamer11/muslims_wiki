import { Button, ButtonGroup, Input, InputGroup } from "../../components";

const SignUp = () => {
  return (
    <form>
      <h1 className="text-2xl mb-4 text-center">أنشئ حسابك</h1>
      <p className="text-center mb-16 font-bold">مسلم ويكي - بوابة شاملة للاسلام</p>
      <InputGroup>
        <Input id="email" type="email" placeholder="ادخل بريدك الالكتروني هنا" />
      </InputGroup>
      <InputGroup>
        <Input id="first_name" type="text" placeholder="اسمك الأول" />
        <Input id="last_name" type="text" placeholder="اسمك الأخير" />
      </InputGroup>
      <InputGroup>
        <Input id="password" type="password" placeholder="ادخل كلمة المرور" />
      </InputGroup>
      <InputGroup>
        <Input id="password2" type="password" placeholder="تأكيد كلمة المرور" />
      </InputGroup>
      <InputGroup>
        <Input id="bio" type="textarea" placeholder="نبذة قصيرة عنك" />
      </InputGroup>
      <ButtonGroup>
        <Button type="submit">أنشئ حسابك</Button>
      </ButtonGroup>
    </form>
  );
};

export default SignUp;
