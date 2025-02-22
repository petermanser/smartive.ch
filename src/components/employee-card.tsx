import Image from 'next/image';
import React, { FC } from 'react';
import { Employee } from '../data/employees';
import { Link, LinkVariants } from '../elements/link';
import { Heading3 } from '../identity/heading-3';

type Props = {
  employee: Employee;
  className?: string;
};

export const EmployeeCard: FC<Props> = ({
  employee: { firstname, lastname, job, bio, image, portrait, links },
  className = '',
}) => (
  <div
    className={`flex flex-col bg-white-100 rounded overflow-hidden ${className}`}
    itemScope
    itemProp="employee"
    itemType="http://schema.org/Person"
  >
    <div className="hidden lg:block w-full">
      <Image
        itemProp="image"
        className="bg-mint-200"
        src={image || getFallbackImage()}
        alt=""
        objectFit="cover"
        width="463"
        height="640"
      />
    </div>
    <div className="block lg:hidden w-full">
      <Image
        itemProp="image"
        className="bg-mint-200"
        src={portrait || getFallbackImage()}
        alt=""
        objectFit="cover"
        width="480"
        height="300"
      />
    </div>
    <div className="flex flex-col flex-1 p-8 font-sans font-normal text-xxs lg:text-sm">
      <p className="mb-6" itemProp="jobTitle">
        {job}
      </p>
      <Heading3 itemProp="name">
        {firstname} {lastname}
      </Heading3>
      <p>{bio}</p>
      <div className="flex flex-1 content-end flex-row flex-wrap mt-6">
        {links.map(({ label, url }) => {
          const itemProp = url.match(/^mailto:.+$/i) ? 'email' : 'sameAs';

          return (
            <Link itemProp={itemProp} className="mr-4 last:mr-0" key={url} href={url} variant={LinkVariants.Default}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

const getFallbackImage = () =>
  `/images/portrait-fallback-${['apricot', 'mint', 'cornflower'][Math.floor(Math.random() * 3)]}.svg`;
