import Demo1 from "@/components/Demo1";
import Demo2 from "@/components/Demo2";
import Demo3 from "@/components/Demo3";
import Demo4 from "@/components/Demo4";
import Demo5 from "@/components/Demo5";
import Demo6 from "@/components/Demo6";

export default function Home() {
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
    </main>
  );
}
