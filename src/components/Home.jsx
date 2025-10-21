import { Github, Linkedin, Mail } from "lucide-react";

export const Home = () => (
  <div className="flex flex-col items-center justify-center h-dvh">
    <h1 className="text-5xl font-bold gradient-text leading-right">
      Sunny Jiao
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-center max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl">
      4A Computer Engineering at University of Waterloo
    </p>
    <div className="flex items-center">
      <div className="flex items-center space-x-4 mt-4">
        <a
          className="hover:text-primary transition-colors"
          href="https://github.com/chitsbits"
          target="_blank"
        >
          <Github></Github>
        </a>
        <a
          className="hover:text-primary transition-colors"
          href="https://linkedin.com/in/sunny-jiao/"
          target="_blank"
        >
          <Linkedin></Linkedin>
        </a>
        <a
          className="hover:text-primary transition-colors"
          href="mailto:sunnyjiao999@gmail.com"
          target="_blank"
        >
          <Mail></Mail>
        </a>
      </div>
    </div>
    <a
      href="/about"
      className="text-background mt-6 px-4 py-2 bg-accent rounded hover:bg-secondary transition-colors"
    >
      About Me
    </a>
  </div>
);
