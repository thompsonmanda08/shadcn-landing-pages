"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Logo from "./logo";
const navigation = {
  resources: [
    {
      name: "Customer Care",
      href: "#",
    },

    {
      name: "Relationship Management",
      href: "#",
    },
    { name: "Demographics", href: "#" },
    {
      name: "FAQs",
      href: "#faqs",
    },
  ],

  partners: [
    {
      name: "Ministry Local Government & Housing",
      href: "https://www.mcti.gov.zm/",
    },

    {
      name: "Ministry of Infrustructure & Developemnt",
      href: "https://www.mihud.gov.zm/",
    },
    {
      name: "Ministry of Technology",
      href: "https://www.mot.gov.zm/",
    },
    { name: "BGS Group Limited", href: "https://bgsgroup.co.zm" },
  ],

  contact: [
    {
      name: "Phone",
      value: ["+260 XX 552 560", "+260 XXX 813 895"],
      href: "#",
      Icon: PhoneIcon,
    },
    {
      name: "Email",
      value: "info@bgsgroup.co.zm.space",
      href: "#",
      Icon: MailIcon,
    },
    {
      name: "Address",
      value: "87A Kabulonga Road, Lusaka",
      href: " https://maps.app.goo.gl/2D1Z7D34jJjgksXDA",
      Icon: MapPin,
    },
  ],
};

const Footer = ({ isBottomBarOnly = false }) => {
  const YEAR = new Date().getFullYear();

  return (
    <footer
      className={cn("py-8 bg-bacground", {
        "py-0 pb-8": isBottomBarOnly,
      })}
      aria-labelledby="footer-heading"
    >
      <span className="sr-only">FOOTER</span>
      <section className="container flex flex-col mx-auto w-full">
        {!isBottomBarOnly && (
          <div className="flex flex-wrap gap-y-6 pt-8 md:gap-6 lg:gap-10">
            {/* LOGO AND ADDRESS */}
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              className="flex max-w-max flex-col gap-6 md:mr-24"
            >
              <div className="hidden flex-col gap-1 md:flex">
                <Logo
                  className="pointer-events-none mb-4 flex w-auto place-items-center gap-2 md:pointer-events-auto"
                  href="/"
                />
                <p className="mb-4 max-w-xs text-sm leading-[28px] text-foreground/80 xl:text-base">
                  Effortlessly track, manage, and repay loans with our smart and
                  intuitive platform.
                </p>
              </div>
            </motion.div>

            {/* PARTNERS */}
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              className="flex min-w-max flex-1 flex-col"
            >
              <h3 className="border-b pb-4 text-[clamp(1rem,3vw,1.25rem)] font-bold text-foreground">
                Related Links
              </h3>
              <ul role="list" className="mb-auto mt-6 space-y-2">
                {navigation.partners.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="text-sm leading-6 text-foreground/80 underline-offset-8 transition-all duration-300 ease-in-out hover:text-foreground hover:underline hover:underline-offset-4"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              className="flex min-w-max flex-1 flex-col"
            >
              <h3 className="border-b pb-4 text-[clamp(1rem,3vw,1.25rem)] font-bold text-foreground">
                Resources
              </h3>
              <ul role="list" className="mb-auto mt-6 space-y-2">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-foreground/80 underline-offset-8 transition-all duration-300 ease-in-out hover:text-foreground hover:underline hover:underline-offset-4"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* BOTTOM BAR */}
        <div className="relative mt-8 flex flex-col justify-center border-t border-foreground/10 pt-8 text-center text-sm leading-6 text-foreground/80 md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-1 md:hidden">
            <Logo
              className="mx-auto mb-4 flex w-auto max-w-max place-items-center gap-2 md:pointer-events-auto"
              href="/"
            />
          </div>
          <p className="text-nowrap">
            &copy; {YEAR}{" "}
            <span className="hidden text-nowrap md:inline-flex">Ares.</span> All
            rights reserved.
          </p>
          <p className="flex flex-col items-center justify-center text-nowrap md:flex-row">
            Powered by{" "}
            <Link
              className="mx-1 my-1 font-semibold transition-all duration-300 ease-in-out hover:text-sky-600 md:my-0"
              href={"https://bgsgroup.co.zm"}
            >
              BGS Group
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
