import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { CalendarDays, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container px-4 md:px-6 pt-10 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="">
            <div className="flex items-center space-x-2 mb-4">
              <CalendarDays className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold tracking-tight">
                Eventique
              </span>
            </div>

            <p className="text-muted-foreground mb-4 max-w-md">
              The all-in-one platform for creating, managing, and hosting
              exceptional events that leave lasting impressions.
            </p>

            {/* <div className="flex space-x-4">
                           
                    ,    </div> */}
          </div>
          <div className="ml-auto">
            <p className="text-primary text-center">Made by azr-arch</p>

            <div className="flex items-center justify-center">
              <a
                target="_blank"
                href="https://x.com/azar_arch"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogoIcon className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://github.com/azr-arch"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/azar-malik-8968a419a/?trk=opento_sprofile_details"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {currentYear} Eventique. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
