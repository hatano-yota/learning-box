import InfiniteScrollSample from "@/recoil/infinite-scroll-sample/InfiniteScrollSample";
import TodoApp from "@/recoil/todoApp/TodoApp";
import TodoEntity from "@/recoil/todoEntity/TodoEntity";
import { NextPage } from "next";
import { RecoilRoot } from "recoil";

const RecoilPage: NextPage = () => {
  return (
    <RecoilRoot>
      <main className={`flex min-h-screen flex-col items-center p-24`}>
        <div>
          <TodoApp />
        </div>
        <div className="mt-40">
          <TodoEntity />
        </div>
        <div className="mt-40">
          <InfiniteScrollSample />
        </div>
      </main>
    </RecoilRoot>
  );
};

export default RecoilPage;
