import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Foo from "./Foo";

const StyledHeader = styled.header`
  color: red;
`;

const App: React.FunctionComponent = () => {
    return (
        <>
            <StyledHeader>Header</StyledHeader>
            <section><Foo/></section>
            <footer>Footer</footer>
        </>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
