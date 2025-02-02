import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface ServicesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleViewed: string;
}

const ServicesSite = ({ backgroundImage, title, subtitle, peopleViewed }: ServicesProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleViewed}</p>
      </div>
     </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <ServicesSite 
          backgroundImage="bg-bg-img-1"
          title="Order & get the Rawuter"
          subtitle="Rawuter"
          peopleViewed="50+ Viewed"
        />
        <ServicesSite 
          backgroundImage="bg-bg-img-2"
          title="Get free data"
          subtitle="Free data"
          peopleViewed="40+ Viewed"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[300px] xl:max-w-[434px] xl:rounded-5xl 
        xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-24 capitalize text-white">
            <strong>SLTMobitel</strong> is the leading telecommunication service
            provider in Sri Lanka, offering a range of products and services,
            including 5G, broadband, mobile, and enterprise solutions.
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 ">
            Visit{" "}
            <a href="https://www.sltmobitel.lk/sltmobitel/">SLTMobitel.lk</a> to
            learn more about their plans, promotions, and benefits.
          </p>
          <Image 
            src="/quote.svg"
            alt="Services-2"
            width={186}
            height={219}
            className="Services-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Services