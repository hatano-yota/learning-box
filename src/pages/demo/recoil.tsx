import TodoApp from "@/recoil/todoApp/components/TodoApp";
import { NextPage } from "next";
import { RecoilRoot } from "recoil";

const RecoilPage: NextPage = () => {
  return (
    <RecoilRoot>
      <main className={`flex min-h-screen flex-col items-center p-24`}>
        <TodoApp />
      </main>
    </RecoilRoot>
  );
};

export default RecoilPage;
