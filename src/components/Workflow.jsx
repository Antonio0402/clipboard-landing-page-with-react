import Feed from "./Feed";

const Workflow = ({ image, title, content }) => {
  const arrAltName = image.split("");
  const altName = arrAltName
    .slice(arrAltName.lastIndexOf("/") + 1, -4)
    .join("");
  return (
    <div className="grid justify-items-center gap-6 sm:gap-9 [&_>_*]:text-center">
      <img className="w-9 sm:w-10" src={image} alt={altName}></img>
      <Feed title={title} content={content} />
    </div>
  );
};

export default Workflow;
