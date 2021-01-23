import { GridItem } from "@chakra-ui/react";
import Layout from "../components/layout";
import LinkList from "../components/LinkList";
import SideMenu from "../components/SideMenu";

const IndexPage = () => (
  <Layout>
    <GridItem rowStart={1} colStart={1}>
      <SideMenu />
    </GridItem>
    <GridItem rowStart={4} colStart={4} rowSpan={4} colSpan={4}>
      <LinkList />
    </GridItem>
  </Layout>
);

export default IndexPage;
