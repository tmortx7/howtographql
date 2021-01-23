import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
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

const CreateLink: React.FC<createLinkProps> = () => {
  const [, createLink] = useMutation(CREATELINK_MUT);
  const formik = useFormik({
    initialValues: {
      description: "",
      url: "",
    },
    onSubmit: (values, { resetForm }) => {
      createLink(values);
      resetForm()
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} >
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
      <Button type="submit"colorScheme="blue" mr={3} mt={4}>
        Save
      </Button>
    </form>
  );
};

export default CreateLink;
