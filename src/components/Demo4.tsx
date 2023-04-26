import { Button, Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";

interface IFormInput {
  firstName: string;
  iceCreamType: { label: string; value: string };
}

const Demo4 = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col">
        First Name
        <Controller
          name="firstName"
          control={control}
          defaultValue="yamada taro"
          render={({ field }) => <Input className="opacity-40 mt-2" {...field} />}
        />
      </label>
      <label className="mt-4">
        Ice Cream Preference
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              className="mt-2"
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
      </label>
      <Button type="submit" variant="outlined" className="mt-6 w-40">
        送信
      </Button>
    </form>
  );
};

export default Demo4;
