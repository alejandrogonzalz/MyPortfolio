export const VLine = ({ className, ...props }: any) => {
  return <div className={className} {...props}></div>;
};

export const HLine = ({ className, children, ...props }: any) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
