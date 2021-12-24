import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        height={48}
        width={48}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
    </div>
  );
};

export default Logo;
