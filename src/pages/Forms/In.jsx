import { Button, ButtonGroup, Input, InputGroup } from "../../components";

const SignIn = () => {
  return (
    <form action="">
      <h1 className="text-2xl mb-4 text-center">ادخل الى حسابك</h1>
      <p className="text-center mb-16 font-bold">مسلم ويكي - بوابة شاملة للاسلام</p>
      <InputGroup>
        <Input id="email" placeholder="ادخل بريدك الالكتروني" type="text" />
      </InputGroup>
      <InputGroup>
        <Input
          id="password"
          placeholder="ادخل كلمة المرور"
          type="password"
        />
      </InputGroup>
      <ButtonGroup>
        <Button type="submit">تسجيل الدخول</Button>
      </ButtonGroup>
    </form>
  );
};

export default SignIn;
