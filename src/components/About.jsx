export const About = () => (
  <div className="flex flex-col md:flex-row items-center justify-center min-h-dvh px-4 sm:px-8 md:px-16 lg:px-32 gap-8 pt-20 max-w-7xl mx-auto">
    <div className="flex flex-col w-full md:w-3/5 max-w-lg">
      <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-lg sm:text-xl">
        Hey, my name is Sunny! I'm a Fourth Year Computer Engineering student at
        the University of Waterloo.
      </p>
      <p className="mt-4 text-lg sm:text-xl">
        I am passionate about software engineering and have experience in
        full-stack development, DevOps, and machine learning.
      </p>
      <p className="mt-4 text-lg sm:text-xl">
        In my free time, I enjoy playing guitar 🎸, fencing 🤺, and doing video
        editing projects 🎞️.
      </p>
      <p className="mt-4 text-lg sm:text-xl">
        I am always looking for new opportunities to learn and grow, so feel
        free to reach out!
      </p>
    </div>
    <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
      <img
        src="/assets/img/sunny-pixel.jpg"
        alt="Sunny Jiao"
        className="rounded-xl shadow-lg w-80 h-80 object-cover"
      />
    </div>
  </div>
);
