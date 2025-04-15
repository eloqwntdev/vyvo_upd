import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { SectionsProps } from "..";

const Sections = ({ slice }: SectionsProps) => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-nb font-light mb-6">
          {slice.primary.title}
        </h2>
        <div className="prose prose-lg">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default Sections;
