import { useForm } from "react-hook-form";
import Demo6Input from "./Demo6Input";

export type FormValues = {
  FirstName: string;
};

const Demo6 = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Demo6Input name="FirstName" control={control} rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};

export default Demo6;
