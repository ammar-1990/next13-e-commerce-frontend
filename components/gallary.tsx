"use client";

import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type Props = {
  images: ImageType[];
};

const Gallary = ({ images }: Props) => {
  return (
    <Tab.Group>
      <div className=" flex flex-col-reverse gap-5">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <Tab
            key={image.id}
              className={({ selected }) =>
                `${
                  selected && "ring-2 ring-offset-4 ring-black"
                } outline-none rounded-lg w-full aspect-square relative`
              }
            >
              <Image src={image.url} fill alt="img-product" className="object-contain rounded-lg"  />
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
            {images.map((image)=><Tab.Panel className={'w-full aspect-square  border rounded-xl p-2 '} key={image.id}>
                <div
                className={'w-full aspect-square relative  rounded-xl '}
                ><Image src={image.url} fill alt={'the-image'} className="object-contain rounded-xl" /></div>
                
            </Tab.Panel>)}
          
        
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Gallary;
