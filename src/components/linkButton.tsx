import { Link, LinkProps } from "expo-router";

interface LinkButtonProps extends LinkProps<string> {
  children: React.ReactNode;
}

function LinkButton({ children, ...rest }: LinkButtonProps) {
  return (
    <Link {...rest} className="text-slate-300 text-center text-base font-body">
      {children}
    </Link>
  );
}

export default LinkButton;
