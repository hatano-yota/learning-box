import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField, Checkbox } from "@mui/material";

const defaultValues = {
  TextField: "",
  MyCheckBox: false,
};

interface IFormInputs {
  TextField: string;
  MyCheckBox: boolean;
}

const Demo5 = () => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues,
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        MUI TextField
        <Controller
          name="TextField"
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
      </label>
      <label>
        MUI CheckBox
        <Controller
          name="MyCheckBox"
          control={control}
          render={({ field }) => <Checkbox {...field} />}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Demo5;
