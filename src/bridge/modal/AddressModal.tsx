import styled from "styled-components";
import {
  Button,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from "../../uikit";

const Footer = styled.div`
  width: calc(100% + 48px);
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid #4c6d2b;
  padding: 20px 0px;
  text-align: center;
`;

const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
  border-radius: 20px;
  z-index: 10001;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 24px 24px 0px 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

type AddressModalProps = {
  onDismiss?: () => void;
  isOpen: boolean;
};

export default function AddressModal({
  onDismiss = () => null,
  isOpen: isOpen,
}: AddressModalProps) {
  return (
    <>
      {isOpen && <ModalOverlay onClick={onDismiss} />}

      <StyledModalContainer minWidth="320px">
        <ModalHeader background="#000500">
          <ModalTitle>
            <Heading style={{ marginBottom: "auto" }}>Add Address</Heading>
          </ModalTitle>
          <ModalCloseButton onDismiss={onDismiss} />
        </ModalHeader>
        <StyledModalBody background="#000500">
          <input
            type="text"
            placeholder="Enter Address"
            className="address-input"
            style={{
              width: "100%",
              height: "40px",
              background: "#000500",
              border: "none",
              color: "white",
              fontWeight: "normal",
              padding: "0 10px",
              marginBottom: "20px",
            }}
          />
        </StyledModalBody>
        <Footer style={{ background: "#000500" }}>
          <Button
            scale="sm"
            variant="secondary"
            style={{
              border: "1px solid #808080",
              borderRadius: "10px",
            }}
            onClick={onDismiss}
          >
            Close
          </Button>
        </Footer>
      </StyledModalContainer>
    </>
  );
}
