import { SubmitHandler, useForm, useFormState } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type Inputs = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
};

const Demo2 = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      firstName: "firstName",
    },
  });
  const { dirtyFields } = useFormState({
    control,
    name: "firstName",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80">
      <input {...register("firstName")} className="mt-2 border border-gray-300 rounded-md p-1" />
      <input {...register("lastName")} className="mt-2 border border-gray-300 rounded-md p-1" />
      {dirtyFields.firstName && <p className="text-yellow-700">Field is dirty</p>}
      <label className="flex justify-between">
        Gender Selection
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </label>
      <div className="flex justify-center">
        <input type="submit" className="mt-2 border border-gray-300 rounded-md w-20" />
      </div>
    </form>
  );
};

export default Demo2;
