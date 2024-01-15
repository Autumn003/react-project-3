import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"10"}>
      <Button
        variant={"unstyled"}
        color={"white"}
        css={{
          "&:hover": {
            color: "grey",
          },
        }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        css={{
          "&:hover": {
            color: "grey",
          },
        }}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        css={{
          "&:hover": {
            color: "grey",
          },
        }}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
