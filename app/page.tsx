import Image from "next/image";
import Link from "next/link";

export default function Home() {




  return (
    <div className="flex flex-col items-center justify-between p-10 gap-10">
      
      <h1 className="text-cemter">Are you looking to become a true web dev warrior?</h1>
      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">Greetings!</p>
        <p>
          As a junior web developer, I&apos;m eager to learn and grow in coding. I&apos;m
          exploring modern web technologies like Next.js and Tailwind CSS,
          building projects to enhance my skills. Feel free to connect if you
          want to discuss coding, projects, or exchange ideas!
        </p>
      </div>
      <div className="nes-container is-rounded bg-white">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/axe-and-shield.webp"
            alt="Axe & Shield"
            width={100}
            height={100}
          />
        
        <p className="text-center">These are my skills</p>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2">
          <Link href="#" className="nes-badge">
            <span className="is-dark">Next.js</span>
          </Link>

          <Link href="#" className="nes-badge">
            <span className="is-primary">TypeScript</span>
          </Link>

          <Link href="#" className="nes-badge">
            <span className="is-warning">Javascript</span>
          </Link>
          <Link href="#" className="nes-badge">
            <span className="is-success">Tailwind</span>
          </Link>

          <Link href="#" className="nes-badge">
            <span className="is-error">Shadcn UI</span>
          </Link>

          <Link href="#" className="nes-badge">
            <span className="is-success">Warrior </span>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
