"use client";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import * as motion from "motion/react-client"
import Masonry from 'react-masonry-css'
import styles from './Gallery.module.css'

export function Gallery() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles['my-masonry-grid']}
      columnClassName={styles['my-masonry-grid_column']}
    >
      {galleryImages.map((img) => (
        <motion.figure
          key={img.src}
          className={styles['my-masonry-grid_item']}  
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt="Gallery Image"
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </motion.figure>
      ))}
    </Masonry>
  );
  // return (

    
  //   <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 m-20">
  //     {galleryImages.map((img) => (
  //       <motion.figure
  //         key={img.src}
  //         className="break-inside-avoid mb-1"
  //         initial={{ opacity: 0 }}
  //         whileInView={{ opacity: 1 }}
  //         viewport={{ once: true, amount: 0.2 }}
  //         transition={{ duration: 0.5, ease: "easeOut" }}
  //       >
  //         <Image
  //           src={img.src}
  //           width={img.width}
  //           height={img.height}
  //           alt="Gallery Image"
  //           placeholder="blur"
  //           blurDataURL={img.blurDataURL}
  //           className="w-full h-auto object-cover"
  //           sizes="(max-width: 768px) 100vw,
  //                  (max-width: 1200px) 50vw,
  //                  33vw"
  //         />
  //       </motion.figure>
  //     ))}
  //   </div>
  // );
}
