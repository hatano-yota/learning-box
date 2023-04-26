// 簡単な例
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Inputs = {
  name: string;
  email: string;
};

const Demo1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} className="border border-gray-300 rounded-md p-1 text-black" />
        <input
          className="mt-2 border border-gray-300 rounded-md p-1 text-black"
          {...register("email", {
            required: true,
            maxLength: 60,
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "メールアドレスの形式が不正です",
            },
            validate: {
              lessThanSixty: (value) => value.length < 60 || "60文字以内で入力してください",
            },
          })}
        />
        {isSubmitting && <span>Submitting...</span>}
        <div className="text-base text-red-400">
          <ErrorMessage errors={errors} name="email" />
        </div>
        <button type="submit" className="mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default Demo1;
