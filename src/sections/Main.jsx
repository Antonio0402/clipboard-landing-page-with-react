import Features from "../components/Features";
import Feed from "../components/Feed";
import Workflow from "../components/Workflow";
import Btn from "../components/Btn";
import { features, feeds, workflow, brands } from "../data/data";
import images from "../images";

const Main = () => {
  return (
    <main className="space-y-36 py-24">
      <section className="space-y-11">
        <Features
          style={"section-container"}
          title={features["section-1"].title}
          content={features["section-1"].content}
        />
        <div className="max-sm:section-container grid gap-11 sm:-translate-x-24 sm:grid-cols-2 sm:items-center">
          <img
            className=""
            src={images["image-computer"]}
            alt="image-computer"
          />
          <div className="flex flex-col gap-8 sm:gap-14">
            {feeds.map((feed, idx) => {
              return (
                <Feed key={idx} title={feed.title} content={feed.content} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-container space-y-11">
        <Features
          style={""}
          title={features["section-2"].title}
          content={features["section-2"].content}
        />
        <img
          className="mx-auto"
          src={images["image-devices"]}
          alt="image-devices"
        />
      </section>
      <section className="section-container space-y-11">
        <Features
          style={""}
          title={features["section-3"].title}
          content={features["section-3"].content}
        />
        <div className="grid justify-items-center gap-10 sm:grid-cols-3 sm:gap-6">
          {workflow.map((work, idx) => {
            return (
              <Workflow
                key={idx}
                image={work.image}
                title={work.title}
                content={work.content}
              />
            );
          })}
        </div>
      </section>
      <section className="section-container space-y-11">
        <div className="grid items-center justify-items-center gap-10 sm:grid-flow-col">
          {brands.map((brand) => {
            const arrBrandName = brand.split("");
            const brandName = arrBrandName
              .slice(arrBrandName.lastIndexOf("/") + 1, -4)
              .join("");
            return (
              <img
                key={brandName}
                className="max-w-2/4"
                src={brand}
                alt={brandName}
              />
            );
          })}
        </div>
      </section>
      <section className="section-container space-y-11">
        <Features
          style={""}
          title={features["section-4"].title}
          content={features["section-4"].content}
        />
        <div className="flex flex-col justify-center gap-5 sm:flex-row">
          <Btn text={"Download for iOS"} style={"btn--download_ios"} />
          <Btn text={"Download for Mac"} style={"btn--download_mac"} />
        </div>
      </section>
    </main>
  );
};

export default Main;
