import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Card from "@/components/Card";
import ContactInfo, { ContactInfoProps } from "@/components/ContactInfo";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rhenwinch - Portfolio",
  description: "A curation of personal/side projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactInfoList: ContactInfoProps[] = [
    {
      iconAlt: "Email",
      iconSrc: "/contact/contact-email.svg",
      text: "rhenaranes@gmail.com",
      href: "mailto:rhenaranes@gmail.com"
    },
    {
      iconAlt: "LinkedIn",
      iconSrc: "/contact/contact-linkedin.svg",
      text: "rc-aranes",
      href: "https://www.linkedin.com/in/rc-aranes/"
    },
    {
      iconAlt: "Phone",
      iconSrc: "/contact/contact-phone.svg",
      text: "+639765223284",
      href: "tel:+639765223284"
    },
    {
      iconAlt: "GitHub",
      iconSrc: "/contact/contact-github.svg",
      text: "rhenwinch",
      href: "https://github.com/rhenwinch"
    },
    {
      iconAlt: "Location",
      iconSrc: "/contact/contact-location.svg",
      text: "QC, Philippines",
      href: "https://maps.google.com/?q=Quezon+City,+Philippines"
    },
    {
      iconAlt: "Location",
      iconSrc: "/contact/contact-resume.svg",
      text: "My Resume",
      href: "#"
    }
  ];

  return (
    <html lang="en">
      <body
        className={`${montserratSans.className} antialiased`}
      >
        <div className="flex flex-col justify-center w-full max-w-[65%] mx-auto gap-10 mt-[5vh]">
          <div className="flex flex-col md:flex-row h-[32vh] items-center gap-8">
            <Card className="h-[100%]">
              <div className="w-65 h-[100%] flex flex-col justify-center items-center gap-10 m-auto">
                <Image
                  src="/profile-picture.jpg"
                  alt="Profile picture"
                  height={135}
                  width={135}
                  className="rounded-full aspect-square object-cover"
                />
                <div className="flex flex-col justify-center items-center gap-2.5">
                  <div className="text-white md:text-4xl font-bold">Rhen Arañes</div>
                  <div><span className="text-white/80 text-base font-medium">Software Developer | </span><span className="text-orange-300 text-base font-medium">Android</span></div>
                </div>
              </div>
            </Card>
            <Card className="h-[100%] flex-1">
              <div className="grid grid-cols-2 p-5 gap-10 h-[100%] items-center justify-around">
                {
                  contactInfoList.map((contact, index) => (
                    <ContactInfo
                      key={index}
                      iconAlt={contact.iconAlt}
                      iconSrc={contact.iconSrc}
                      text={contact.text}
                      href={contact.href}
                    />
                  ))
                }
              </div>
            </Card>
          </div>

          <div className="h-px bg-white/40"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
