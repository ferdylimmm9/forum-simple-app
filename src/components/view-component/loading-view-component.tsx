import { Loader } from "@mantine/core";
import React from "react";

interface LoadingViewComponentProps {
  loadingComponent?: React.ReactNode;
}
export default function LoadingViewComponent(props: LoadingViewComponentProps) {
  if (props.loadingComponent) {
    return props.loadingComponent;
  }
  return <Loader />;
}
