import TodoApp from "@/recoil/todoApp/components/TodoApp";
import TodoEntity from "@/recoil/todoEntity/components/TodoEntity";
import { NextPage } from "next";
import { RecoilRoot } from "recoil";

const RecoilPage: NextPage = () => {
  return (
    <RecoilRoot>
      <main className={`flex min-h-screen flex-col items-center p-24`}>
        <div>
          <TodoApp />
        </div>
        <div className="mt-8">
          <TodoEntity />
        </div>
      </main>
    </RecoilRoot>
  );
};

export default RecoilPage;
