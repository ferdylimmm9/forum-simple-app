export interface ErrorViewComponentProps {
  error: Error;
  reset: () => void;
}
export default function ErrorViewComponent(props:ErrorViewComponentProps) {
  return <div>Error</div>;
}
