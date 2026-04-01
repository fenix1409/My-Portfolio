import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  tools?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
  tools,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md flex flex-col h-full">
      <Link href={link} target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover h-48 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="relative p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {github && (
             <Link href={github} target="_blank" rel="noreferrer noopener" className="text-gray-300 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
             </Link>
          )}
        </div>
        <p className="text-gray-300 text-sm flex-grow mb-4">{description}</p>
        
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 text-[10px] font-medium text-purple-200 bg-purple-900/30 border border-purple-500/30 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          href={link} 
          target="_blank" 
          rel="noreferrer noopener"
          className="mt-4 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white text-center rounded-md transition-colors text-sm font-medium"
        >
          View Live Demo
        </Link>
      </div>
    </div>
  );
};
