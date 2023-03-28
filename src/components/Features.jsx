const Features = ({ title, content, style }) => {
  return (
    <div className={`text-center ${style}`}>
      <h3 className="text-800 font-semibold">{title}</h3>
      <p className="text-500 mx-auto max-w-[55ch]">{content}</p>
    </div>
  );
};

export default Features;
