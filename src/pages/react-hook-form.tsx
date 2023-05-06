import Demo1 from "@/react-hook-form/Demo1";
import Demo2 from "@/react-hook-form/Demo2";
import Demo3 from "@/react-hook-form/Demo3";
import Demo4 from "@/react-hook-form/Demo4";
import Demo5 from "@/react-hook-form/Demo5";
import Demo6 from "@/react-hook-form/Demo6";
import Demo7 from "@/react-hook-form/selectModal/Demo7";
import { NextPage } from "next";

const ReactHookFormPage: NextPage = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <div>
        <Demo1 />
      </div>
      <div className="mt-6">
        <Demo2 />
      </div>
      <div className="mt-6">
        <Demo3 />
      </div>
      <div className="mt-6">
        <Demo4 />
      </div>
      <div className="mt-6">
        <Demo5 />
      </div>
      <div className="mt-6">
        <Demo6 />
      </div>
      <div className="mt-6">
        <Demo7 />
      </div>
    </main>
  );
};

export default ReactHookFormPage;
