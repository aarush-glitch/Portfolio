/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const projects = [
	{
		title: "Dadhichi - AI Fitness Coach",
		tech: ["Python", "Streamlit", "OpenCV", "Fitbit API"],
		description:
			"AI fitness coach with real-time pose tracking (90%+ accuracy), Fitbit API integration for health monitoring, and adaptive workouts boosting user acceptance by 30%+.",
		img: "/images/dadhichi.png",
		github: "https://github.com/aarush-glitch/Dadhichi1",
	},
	{
		title: "Raktadatra",
		tech: ["JavaScript", "HTML", "CSS", "Firebase"],
		description:
			"Real-time blood donor matching system using Firebase, region-based filtering, and AI demand forecasting, reducing search time by 40% and manual requests by 25–35%.",
		img: "/images/raktadatra.png",
		github: "https://github.com/aarush-glitch/raktadatra",
	},
	{
		title: "CropConnect",
		tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		description:
			"B2C e-commerce platform for direct farmer-to-consumer sales, streamlined backend logic, improving load time by 10% and reducing DB load by 30%.",
		img: "/images/cropconnect.png",
		github: "https://github.com/aarush-glitch/CropConnect",
	},
	{
		title: "Aarush Gupta Portfolio",
		tech: [
			"Next.js 14",
			"TypeScript",
			"Magic UI",
			"Lucide React",
		],
		description:
			"Modern dev portfolio with 3D animations, contact form, and dynamic theme. Built using Next.js 14, Framer Motion, and Three.js.",
		img: "/images/portfolio.png",
		github: "https://github.com/aarush-glitch/portfolio",
	},

];

const firstRow = projects.slice(0, projects.length);
const secondRow = [...projects].reverse();

const ProjectCard = ({
  title,
  description,
  img,
  tech,
  github,
  large,
}: {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github: string;
  large?: boolean;
}) => (
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform duration-300 hover:scale-105"
  >
    <figure
      className={cn(
        large
          ? "relative h-[380px] w-fit sm:w-[28rem] cursor-pointer overflow-hidden rounded-3xl border-2"
          : "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "flex flex-col"
      )}
    >
      {/* Image with ONLY top rounded corners */}
      <img
        className="w-full h-52 object-cover rounded-t-3xl"
        src={img}
        alt={title}
      />

      {/* Text content */}
      <figcaption className="font-bold text-lg dark:text-white mb-1 mt-3 px-4 whitespace-normal break-words">
        {title}
      </figcaption>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-2 px-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-base rounded bg-[#23213a] text-[#43e7ad] font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <blockquote className="text-sm text-[#bdbdbd] px-4 overflow-y-auto">
        {description}
      </blockquote>
    </figure>
  </a>
);
	


export function ProjectsMarquee3D() {
	return (
		<section id="projects" className="w-full flex flex-col items-center justify-center py-24">
			<h2 className="text-6xl font-extrabold text-white mb-6 text-center tracking-tight drop-shadow-xl">
				Projects
			</h2>
			<div className="relative flex flex-col min-h-[100vh] w-full max-w-none items-center justify-center gap-4 overflow-visible [perspective:1600px]">
				<Marquee pauseOnHover className="[--duration:80s] w-full">
					{firstRow.map((project, idx) => (
						<ProjectCard key={project.title + idx} {...project} large />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:50s] w-full">
					{secondRow.map((project, idx) => (
						<ProjectCard key={project.title + idx + 'r'} {...project} large />
					))}
				</Marquee>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section>
	);
}

export default ProjectsMarquee3D;
