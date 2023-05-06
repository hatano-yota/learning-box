import { Button, Input, Modal, Text } from "@nextui-org/react";
import { useForm } from "react-hook-form";

type Props = {
  handleClose: () => void;
  onSubmit: (data: { credit: string }) => void;
};

const CreditModal = (props: Props) => {
  const { handleClose, onSubmit } = props;
  const { handleSubmit, register } = useForm<{ credit: string }>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Header>
        <Text id="modal-title" size={15}>
          クレジットカード番号を入力してください
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="xxxx-yyyy-zzzz"
          {...register("credit")}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto onPress={handleClose} type="submit">
          保存
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default CreditModal;
