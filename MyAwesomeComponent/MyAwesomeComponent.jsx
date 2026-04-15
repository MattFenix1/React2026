import React from "react";
import Box from "./components/Box";
import Text from "./components/Text";
import Button from "./components/Button";

const MyAwesomeComponent = () => {
    return (
        <Box className="medium">
            <Text className="large">Welcome to My Awesome Component!</Text>
            <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
        </Box>
    );
};
export default MyAwesomeComponent;