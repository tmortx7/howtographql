import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useMutation } from "urql";

interface createLinkProps {}

const CREATELINK_MUT = `
mutation PostMutation($description: String!, $url:String!) {
  createLink(input: { description: $description, url: $url }) {
    id
  }
}
`;

const CreateForm: React.FC<createLinkProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, createLink] = useMutation(CREATELINK_MUT);
  const formik = useFormik({
    initialValues: {
      description: "",
      url: "",
    },
    onSubmit: (values, { resetForm }) => {
      createLink(values);
      resetForm();
    },
  });
  return (
    <>
      <Button variant="link" onClick={onOpen}>Create Link</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>Create your Link</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  id="description"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="A description for the link"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Url</FormLabel>
                <Input
                  id="url"
                  name="url"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.url}
                  placeholder="The URL for the link"
                  autoComplete="off"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3} >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateForm;
