import { UseQueryResult } from "@tanstack/react-query";

import { ApiErrorType, ApiResultType } from "../api-hooks/common";
import { AxiosResponse } from "axios";
import { ErrorViewComponent, LoadingViewComponent } from "./view-component";

type UseQueryResultAxios<T = object> = UseQueryResult<
  AxiosResponse<ApiResultType<T>, ApiErrorType>,
  Error
>;

interface LoaderProps<T extends UseQueryResultAxios> {
  query: T;
  children: (data: T["data"]) => React.ReactNode;
}

export default function Loader<T extends UseQueryResultAxios>(
  props: LoaderProps<T>
) {
  const { query } = props;
  if (query.isFetching) {
    return <LoadingViewComponent />;
  }

  if (query.error) {
    return <ErrorViewComponent error={query.error} reset={query.refetch} />;
  }

  return props.children(query.data);
}
