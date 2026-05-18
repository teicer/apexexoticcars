import Card from "@/components/Card";
import Col from "@/components/Col";
import ResponsiveGrid from "@/components/ResponsiveGrid";
import { Phone, Mail } from "lucide-react";

import React from "react";
import IconButton from "@/components/IconButton";
import ContactForm from "./form/ContactForm";
import SocialMediaSection from "@/components/SocialMediaSection";

const Contact = () => {
  return (
    <Card className="p-6 md:p-10">
      <ResponsiveGrid cols={{ base: 12, md: 12, xl: 12 }} gap="gap-8">
        {/* LEFT CONTAINER */}
        <Col className="fade-divider p-4 md:p-8" span={{ base: 12, md: 12, lg: 6 }}>
          <h2 className="font-body xl:text-4xl text-xl">Contact Us</h2>
          <p className="mt-4 text-secondary xl:text-md text-sm leading-relaxed">
            Got questions about our products or services? We're here to help you! Whether you're looking for expert
            advice, need assistance with your purchase. or simply want to chat about cars, our team is ready to steer
            you in the right direction...
          </p>
          <div className="mt-6 flex items-center gap-4">
            <IconButton onClick={() => {}} icon={<Phone size={20} />} />
            <div>
              <p className="text-sm text-secondary">Phone</p>
              <span className="lg:text-md text-sm font-medium text-foreground">+30 6969696969</span>
            </div>
          </div>{" "}
          <div className="mt-6 flex items-center gap-4">
            <IconButton onClick={() => {}} icon={<Mail size={20} />} />
            <div>
              <p className="text-sm text-secondary">Email</p>
              <span className="lg:text-md text-sm font-medium text-foreground">info@example.com</span>
            </div>
          </div>
          <SocialMediaSection />
        </Col>

        {/* RIGHT CONTAINER */}
        <Col className="mobile-top-divider p-4 pt-8 md:p-8" span={{ base: 12, md: 12, lg: 6 }}>
          <ContactForm />
        </Col>
      </ResponsiveGrid>
    </Card>
  );
};

export default Contact;
