import { HTMLAttributes } from "react";
import classNames from "classnames";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={classNames("sm:mx-auto sm:w-full sm:max-w-md px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
