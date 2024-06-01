import { Outlet } from "react-router-dom";
import ToggleButton from "./ToggleButton";

const Sign = () => {
  return (
    <div>
      <div className="bg-green-300 pt-[12rem] text-center">
        <ul className="flex justify-center gap-4">
          <ToggleButton text={"تسجيل الدخول"} routePath={"in"} />
          <ToggleButton text={"أنشئ حسابك"} routePath={"up"} />
        </ul>
      </div>
      <div className="mt-16 mb-20 sign-form">
        <Outlet />
      </div>
    </div>
  );
};

export default Sign;
