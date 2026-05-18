import Link from "next/link";
import Col from "./Col";
import ResponsiveGrid from "./ResponsiveGrid";
import SocialMediaSection from "./SocialMediaSection";
import { navItems } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="w-full mt-10 border-t border-border/40 bg-over-card/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-12">
        <ResponsiveGrid cols={{ base: 12, lg: 12 }} gap="gap-8">
          <Col span={{ base: 12, lg: 6 }}>
            <div className="min-h-32">
              {/* Logo / description */}
              <Link href="/" className="font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
                Apex Exotics
              </Link>
              <p className="mt-4 text-sm text-secondary">
                Apex Exotics Cars is a premier exotic car dealership dedicated to providing an unparalleled selection of
                high-performance vehicles. With a commitment to excellence and customer satisfaction, we offer of the
                world's
              </p>
            </div>
          </Col>

          <Col span={{ base: 12, lg: 6 }}>
            <div className="flex items-center justify-center">
              <SocialMediaSection />{" "}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <nav className=" gap-8 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-body text-sm font-medium text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </Col>
        </ResponsiveGrid>
      </div>

      <div className="border-t border-border/40 bg-over-card/40 ">
        <div className="mx-auto w-full max-w-7xl px-5 py-6">
          <ResponsiveGrid cols={{ base: 12, md: 12 }} gap="gap-4" className="flex md:justify-end ">
            <Col span={{ base: 12, md: 6 }}>
              <div>
                <p className="text-sm text-secondary">
                  &copy; {new Date().getFullYear()} Apex Exotics Cars. All rights reserved.
                </p>
              </div>
            </Col>
          </ResponsiveGrid>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
