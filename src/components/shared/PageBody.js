const PageBody = ({ text="", children }) => {
  return (
    <div className="section__body">
      <p>{text}</p>
      {children}
    </div>
  );
};

export default PageBody;
