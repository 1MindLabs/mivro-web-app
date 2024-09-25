import { AspectRatio } from "@/components/ui/aspect-ratio";

type FeatureInfo = {
  header: string;
  description: React.ReactNode;
  videoSource: string;
};
type SingleFeatureProps = {
  info: FeatureInfo;
};

export default function Features() {
  const featureInfo = [
    {
      header: "One Scan, All the Info",
      description: (
        <>
          Simply scan a product barcode to get a full breakdown of ingredients,
          nutrients, and health risks. Dive deep into what you consume with just
          one tap 📲
        </>
      ),
      videoSource: "/webms/soon.mp4",
    },
    {
      header: "Quick Search, Clear Answers",
      description: (
        <>
          Type in what you are looking for and instantly access deep nutritional
          analysis and health recommendations. Your path to wellness starts here
          🌱
        </>
      ),
      videoSource: "/webms/soon.mp4",
    },
    {
      header: "Smart Eating, Easily Managed",
      description: (
        <>
          Scan barcodes to effortlessly track and review your meals, ensuring
          you manage your diet with precision and simplicity 🍽️
        </>
      ),
      videoSource: "/webms/soon.mp4",
    },
    {
      header: "Discover Quality, Shop Smart",
      description: (
        <>
          Explore a variety of top-rated products that fit your health goals.
          Shop easily and make better choices for your well-being 🥗
        </>
      ),
      videoSource: "/webms/soon.mp4",
    },
  ];

  return (
    <section className="flex flex-col justify-evenly">
      {featureInfo.map((info, index) => (
        <SingleFeature key={index} info={info} />
      ))}
    </section>
  );
}

function SingleFeature(props: SingleFeatureProps) {
  return (
    <div className="m-4 flex flex-col items-center gap-6 min-[425px]:m-8 min-[425px]:items-start sm:m-12 lg:m-24 lg:max-w-full lg:flex-row lg:justify-center lg:gap-28">
      <div className="mb-6 flex w-full flex-col text-center lg:mb-0 lg:ml-1.5 lg:w-[450px] lg:text-left">
        <h4
          className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          {props.info.header}
        </h4>
        <br />
        <div
          className="whitespace-pre-line text-base text-gray-600 lg:text-lg"
          data-aos="fade-up"
        >
          {props.info.description}
        </div>
      </div>
      <div className="w-full lg:w-[800px]">
        <AspectRatio ratio={3 / 2}>
          <video
            autoPlay
            loop
            muted
            controls
            playsInline
            className="h-full w-full rounded-lg object-cover"
            data-aos="fade-up"
          >
            <source src={props.info.videoSource} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      </div>
    </div>
  );
}
