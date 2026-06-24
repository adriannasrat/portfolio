import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";
import Journey from "@/app/about/components/Journey";

import duLogo from "public/work/du.png";
import awLogo from "public/work/aw.png";

import dalarnaUniversity from "public/gallery/dalarna-university.jpeg";
import mac from "public/gallery/programming.webp";
import vasteras from "public/gallery/västerås.jpeg";

export const metadata: Metadata = {
  title: "About | Adrian Nasrat",
  description:
    "Junior Software Engineer with a degree in Information Systems from Dalarna University. Passionate about building modern web applications, improving user experiences and continuing to grow as a developer.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={vasteras}
            alt={"västerås"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={mac}
            alt={"Programming on a MacBook"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hey, I&apos;m Adrian! I was born and raised in Sweden and I&apos;m
              someone who has always enjoyed learning, creating and figuring out
              how things work.
            </p>
            <p>
              I&apos;m really into software development and have been coding for{" "}
              {new Date().getFullYear() - 2022} years. I enjoy building websites
              and applications, especially when I get to mix coding with design.
              Turning ideas into something real and slowly improving them until
              everything feels right is something I really enjoy and strive for.
            </p>
            <p>
              Outside of coding, I like playing chess, getting hooked on a good
              film or series and listening to music. So when I&apos;m not in
              front of my computer, I&apos;m probably looking for something new
              to watch or losing track of time over a chess match.
            </p>
            <p>
              I recently finished my degree in System development and right now
              I&apos;m just excited to keep building, learning and seeing where
              things go next.
            </p>
            {/* <p>
              In addition to coding, I create content on my{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@brianruizy"
              >
                YouTube
              </Link>{" "}
              channel, covering all things technology, coding vlogs, and
              personal development.
            </p> */}
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        {/*    <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in C#, React, web development and UI/UX. But I am
              always learning new things. Here are some of the places I have
              worked and currently study.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section> */}
        <Section heading="Journey" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p className="max-w-2xl">
              I specialize in C#, React, web development and UI/UX. I am always
              learning new things. Explore my professional experience and
              education below.
            </p>

            <Journey workplaces={workplaces} education={education} />
          </div>
        </Section>
      </div>
    </div>
  );
}

/* const workplaces = [
  {
    title: "Student",
    company: "Dalarna University",
    date: "2023 - 2026",
    imageSrc: duLogo,
    link: "https://www.du.se/en",
  },
  {
    title: "IT Consultant",
    company: "Academic Work",
    date: "2022 - 2023",
    imageSrc: awLogo,
    link: "https://www.academicwork.com/",
  },
];
 */

const workplaces = [
  {
    title: "IT Consultant",
    organization: "Academic Work",
    subtitle: "Hired consultant",
    date: "2022 – 2023",
    link: "https://www.academicwork.se/",
  },
  {
    title: "Frontend Developer",
    organization: "Ampilio",
    subtitle: "Internship",
    date: "2020 – 2021",
    link: "https://www.ampilio.se/",
  },
];

const education = [
  {
    title: "System Science Programme",
    organization: "Dalarna University",
    subtitle: "Bachelor's degree",
    date: "2023 – 2026",
    link: "https://www.du.se/sv/utbildning/Program/utbildningsplan/?code=DSVPG",
  },
  {
    title: "C# .NET program",
    organization: "Academic Work",
    subtitle: "Completion of an intensive program",
    date: "2022 – 2023",
    link: "https://www.academicwork.se/",
  },
  {
    title: "Frontend development",
    organization: "EC Utbildning",
    subtitle: "Higher vocational education",
    date: "2019 – 2021",
    link: "https://ecutbildning.se/",
  },
  {
    title: "Computer Science",
    organization: "Mälardalen University",
    subtitle: "University studies",
    date: "2017 – 2018",
    link: "https://www.mdu.se/",
  },
  {
    title: "Technology Program",
    organization: "NTI Gymnasiet",
    subtitle: "Upper secondary school",
    date: "2014 – 2017",
    link: "https://ntigymnasiet.se/",
  },
];
