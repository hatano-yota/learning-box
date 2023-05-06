import CreditModal from "@/react-hook-form/selectModal/CreditModal";
import { Button, Input, Modal, Text } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// form実装はreact-hook-formで統一したい
// → 選択モーダル(保存ボタンなどを押下しないとformに反映されない)を１つのformとして扱う
const Demo7 = () => {
  const { register, handleSubmit, setValue, watch } = useForm<{ name: string; credit: string }>();
  const credit = watch("credit");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Text h1 size={30} weight="bold">
        サンプルForm
      </Text>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("submit: ", data);
        })}
      >
        <div>
          <dl>
            <dt>名前</dt>
            <dd>
              <Input clearable initialValue="春夏秋冬" width="200px" {...register("name")} />
            </dd>
          </dl>
          <dl>
            <dt>クレジットカード 💳</dt>
            <dd>
              <Text>{credit ?? "none"}</Text>
              <Button onClick={() => setIsOpen(true)} auto flat>
                変更
              </Button>
            </dd>
          </dl>
          <Button type="submit">送信</Button>
        </div>
      </form>
      <Modal closeButton aria-labelledby="modal-title" open={isOpen} onClose={handleClose}>
        <CreditModal
          handleClose={handleClose}
          onSubmit={({ credit }) => {
            console.log("CreditModal Submit");
            setValue("credit", credit);
          }}
        />
      </Modal>
    </div>
  );
};

export default Demo7;
