const FrameContainer = ({ children, className, ...props }: any) => {
  return (
    <div
      className={className}
      style={{
        height: "50vh",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default FrameContainer;
