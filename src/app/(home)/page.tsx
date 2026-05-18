"use client";
import Col from "@//components/Col";
import ResponsiveGrid from "@//components/ResponsiveGrid";
import fontImgDark from "@/assets/images/font_img_1.png";
import fontImgLight from "@/assets/images/font_img_1_light.png";
import Card from "@/components/Card";
import ImageCarousel from "@/components/CarouselImage";
import Contact from "./contact/Contact";
export default function Home() {
  const images = [
    { id: "1", image: fontImgDark, alt: "Font Image Dark" },
    { id: "2", image: fontImgLight, alt: "Font Image Light" },
  ];
  return (
    <div>
      <ResponsiveGrid
        cols={{ base: 12 }}
        gap={"gap-2"}
        className="flex flex-col text-xl md:text-2xl tracking-wide text-text-main"
      >
        <Col span={{ base: 12 }} className="flex flex-col flex-1 items-center justify-center mt-2">
          <Card className="w-full h-full p-2  sm:p-4">
            <ImageCarousel images={images} duration={5000} />
          </Card>
        </Col>
      </ResponsiveGrid>
      <div className="flex flex-col items-center justify-center mt-10 mb-10 gap-6 px-4 text-center">
        <Col span={{ base: 12 }} className="flex flex-col flex-1 items-center justify-center mt-2">
          <h1 className="text-xl md:text-6xl font-display font-extrabold">"Selling Cars Building Trust"</h1>
          <p className="mt-6 text-sm md:text-xl font-body text-secondary flex-wrap">
            At the heart of our business lies a commitment to more than just selling vehicles-we're dedicated...
          </p>
        </Col>
      </div>
      <Contact />
    </div>
  );
}
