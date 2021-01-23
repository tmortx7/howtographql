import { Grid } from "@chakra-ui/react";
interface AppProps{
  children: React.ReactNode;
}
export default function Layout({children}:AppProps) {
  return (
    <div>
      <Grid
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12,1fr)"
        h="100vh"
        w="100%"
      >
        {children}
      </Grid>
    </div>
  );
}
