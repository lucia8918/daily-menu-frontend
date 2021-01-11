import React from "react";
import styled from "styled-components";
import { useGlobalLoadingContext } from "../../context/GlobalLoadingContext";

const GlobalLoading = () => {
  const loading = useGlobalLoadingContext();
  return (
    loading && (
      <div>
        <LoadingBorder className="spinner spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </LoadingBorder>
      </div>
    )
  );
};

const LoadingBorder = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 5rem;
  height: 5rem;
  vertical-align: text-bottom;
  border: 0.45em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
  background: transparent;
`;

export default GlobalLoading;
