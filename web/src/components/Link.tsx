import React from "react";

type AppProps = {
  link: {
    id: string;
    description: string;
    url: string;
  };
}
const Link:React.FC<AppProps> = ({ link }) => (
  <div>
    <div>
      {link.description} ({link.url})
    </div>
  </div>
);

export default Link;
