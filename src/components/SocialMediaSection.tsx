import { cn } from "@/lib/utils";
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface SocialMediaSectionProps {
  className?: string;
}

const SocialMediaSection = ({ className }: SocialMediaSectionProps) => {
  return (
    <div className={cn(`mt-6 items-center gap-4`, className)}>
      <p className="lg:text-md text-sm font-medium text-foreground ">Social Media</p>
      <div className="flex items-center gap-4 mt-4">
        <a href="https://www.instagram.com/apexexoticscars/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.tiktok.com/@apexexoticscars" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={20} />
        </a>
        <a href="https://wa.me/306969696969" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
