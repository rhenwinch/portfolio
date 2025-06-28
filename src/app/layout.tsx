import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Card from "./ui/Card";
import ContactInfo from "./ui/ContactInfo";

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
  return (
    <html lang="en">
      <body
        className={`${montserratSans.className} antialiased`}
      >
        <div className="flex flex-col justify-center w-[100%]">
          <div className="flex flex-row h-[32vh] items-center gap-8 mx-auto">
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
            <Card className="h-[100%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[100%] w-[40vw] items-center justify-around">
                <ContactInfo
                  iconAlt="Email"
                  iconSrc="/contact/contact-email.svg"
                  text="rhenaranes@gmail.com"
                />
                <ContactInfo
                  iconAlt="LinkedIn"
                  iconSrc="/contact/contact-linkedin.svg"
                  text="rc-aranes"
                />
                <ContactInfo
                  iconAlt="Phone"
                  iconSrc="/contact/contact-phone.svg"
                  text="+639765223284"
                />
                <ContactInfo
                  iconAlt="GitHub"
                  iconSrc="/contact/contact-github.svg"
                  text="rhenwinch"
                />
                <ContactInfo
                  iconAlt="Location"
                  iconSrc="/contact/contact-location.svg"
                  text="QC, Philippines"
                />
              </div>
            </Card>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
