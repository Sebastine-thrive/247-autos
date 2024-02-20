// import { FC } from "react";

// import { urlForImage } from "@/sanity/lib/image";
// import Image from "next/image";

// import { PortableText } from "@portabletext/react";

// interface PortableTextProps {
//   content: any[]; // This should be a structured array representing the portable text content
//   imgWidth: number; // Width of the image
//   imgHeight: number; // Height of the image
// }


// interface ImageTypeProps {
//   value: { imageUrl: string };
// }

// export const BlogPortableTextComponent = ({ props }: { props: any[] }) => {
 
// // const customBlockComponents = {
// //   types: {
// //     image: ({ value }: ImageTypeProps) => <img src={value.imageUrl} alt="engine image" width={100} height={50} />
// //   }
// // };

//   return (
//     <PortableText
//       value={props}
//       // components={customBlockComponents}
//     />
//   );
// };

// // import urlBuilder from '@sanity/image-url'
// // import {getImageDimensions} from '@sanity/asset-utils'

// // // Barebones lazy-loaded image component
// // const SampleImageComponent = ({value}) => {
// //   const {width, height} = getImageDimensions(value)
// //   return (
// //     <img
// //       src={urlBuilder().image(value).width(800).fit('max').auto('format').url()}
// //       alt={value.alt || ' '}
// //       loading="lazy"
// //       style={{
// //         // Avoid jumping around with aspect-ratio CSS property
// //         aspectRatio: width / height,
// //       }}
// //     />
// //   )
// // }

// // // You'll now need to define your own image component
// // ;<PortableText
// //   value={input}
// //   components={{
// //     // ...
// //     types: {
// //       image: SampleImageComponent,
// //     },
// //   }}
// // />


const BlockContent = require('@sanity/block-content-to-react')
