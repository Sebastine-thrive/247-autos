import React from "react";
import Image from "next/image";
import purpose from "./../../../../public/assets/images/team1.jpg";
import relationship from "./../../../../public/assets/images/relationship.png";
import satisfaction from "./../../../../public/assets/images/customer satisfaction.webp";

const featuresData = [
  {
    imageSrc: purpose,
    alt: "purpose driven picture",
    title: "Driven with purpose",
    description:
      "At 247 Autos, we empower buyers and sellers with the resources to enjoy value and make sales.",
  },
  {
    imageSrc: relationship,
    alt: "interpersonal relationship picture",
    title: "Cultivating interpersonal Connections",
    description:
      "Our relationships are the cornerstone of our business. We are proud of the relationships we have fostered over the years. We look to sustain them and build more connections of people and businesses making profits and enjoying value.",
  },
  {
    imageSrc: satisfaction,
    alt: "customer satisfaction picture",
    title: "Prioritising customer satisfaction",
    description:
      "Customer satisfaction is at the center of our world. Cars play an important role in people's lives and is the one of the biggest purchases one can make. We are dedicated to helping everyone who come across us achieve their goals as easily and efficiently as possible.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-4">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2"
        >
          <div>
            <Image
              src={feature.imageSrc}
              alt={feature.alt}
              width={300}
              height={200}
              className="product-image w-auto rounded-sm"
            />
          </div>
          <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4">
            <h3 className="text-[#616161] font-bold text-xl md:mr-2">
              {feature.title}
            </h3>
            <p className="mt-1 font-normal">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;


// <div className="py-4">
// <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
//   <div>
//     <Image
//       src={purpose}
//       alt="purpose driven picture"
//       width={300}
//       height={200}
//       className="product-image w-auto rounded-sm"
//     />
//   </div>
//   <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4 ">
//     <h3 className="text-[#616161] font-bold text-xl md:mr-2">
//       Driven with purpose
//     </h3>
//     <p className="mt-1 font-normal">
//       At 247 Autos, we empower buyers and sellers with the resources
//       to enjoy value and make sales.
//     </p>
//   </div>
// </div>

// <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
//   <div className="mt-1 font-normal">
//     <Image
//       src={relationship}
//       alt="interpersonal relationship picture"
//       width={300}
//       height={200}
//       className="product-image w-auto rounded-sm"
//     />
//   </div>
//   <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4">
//     <h3 className="text-[#616161] font-bold text-xl md:mr-2 ">
//       Cultivating interpersonal Connections
//     </h3>
//     <p className="mt-1 font-normal">
//       Our relationships are the conerstone of our business. We are
//       proud of the relationships we have fostered over the years. We
//       look to sustain them and build more connections of people and
//       businesses making profits and enjoying value.
//     </p>
//   </div>
// </div>
// <div className="flex flex-col text-center items-center md:text-start md:items-start md:flex-row mt-4 lg:mt-2">
//   <div className="mt-1">
//     <Image
//       src={satisfaction}
//       alt="customer satisfaction picture"
//       width={300}
//       height={200}
//       className="product-image w-auto rounded-sm"
//     />
//   </div>
//   <div className="mt-1 md:mt-0 md:ml-2 lg:ml-4">
//     <h3 className="text-[#616161] font-bold text-xl">
//       Prioritising customer satisfaction{" "}
//     </h3>
//     <p className="mt-1 font-normal">
//       customer satisfaction is at the center of our world. Cars play
//       an important role in peoples's lives and is the one of the
//       biggest purchases one can make. We are dedicated to helping
//       everyone who come across us achieve their goals as easily and
//       efficiently as possible.
//     </p>
//   </div>
// </div>
// </div>
