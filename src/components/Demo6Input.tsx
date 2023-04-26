import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "./Demo6";

const Demo6Input = (props: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
};

export default Demo6Input;
