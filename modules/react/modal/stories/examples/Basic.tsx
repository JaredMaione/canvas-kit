import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {px2rem} from '@workday/canvas-kit-styling';

export const Basic = () => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card cs={{width: px2rem(704), height: px2rem(712)}}>
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Body>
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
            test
            <br />
          </Modal.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
