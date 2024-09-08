import { useGetMe } from "../../api-hooks/auth";

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  const queryMe = useGetMe();
  return <div>Header</div>;
}
