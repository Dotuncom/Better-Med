type widgetProps = {
  children: React.ReactNode;
  title: string;
};
const Widget = ({ children, title }: widgetProps) => {
  return (
    <div className=" max-w-90 min-w-90 min-h-60 flex flex-col  ">
      <div className=" h-15 w-full bg-accent/50 text-white font-bold text-2xl flex items-center justify-center  rounded-2xl">{title}</div>
      <div className=" flex-grow px-8 min-h-ful">
        <div className="border-l border-r border-b border-accent min-h-full px-4 ">{children}</div>
      </div>
    </div>
  );
};

export default Widget;
