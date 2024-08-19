import girl from "../assets/girl.jpeg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={girl} alt="about picture" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <p className="text-base mt-25 my-1 max-w-lg py-2">
              I am a dedicated and enthusiastic software developer with a strong foundation in computer science and a passion for solving complex problems through technology. 
              My journey has equipped me with skills in programming, data analysis, and machine learning, allowing me to build efficient and innovative solutions. 
              Whether it's developing intuitive web applications or creating predictive models, I enjoy turning ideas into reality.
              I am always eager to learn new technologies and apply them in ways that can make a meaningful impact.
              My passion for continuous learning and personal growth drives me to stay updated with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;