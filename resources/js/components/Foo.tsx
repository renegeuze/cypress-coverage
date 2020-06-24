import React from "react"
import styled from "styled-components";

const StyledFoo = styled.header`
  color: blue;
`;

const Foo: React.FunctionComponent = () => {
    return (
        <StyledFoo>Foo</StyledFoo>
    );
};

export default Foo;
