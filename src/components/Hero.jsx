import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-row flex-wrap md:flex-nowrap">
        <div className="w-full lg:w-[750px]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-8xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Susmitha
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Developer
            </span>
            <p className="my-2 max-w-6xl py-12 font-normal text-base tracking-tighter">
            I am a committed developer with a strong academic background in computer science and hands-on experience in building dynamic and visually appealing web applications. 
            Proficient in Python, SQL and basics of Java.
            I excel at creating user-friendly interfaces that enhance the overall user experience. 
            My experience includes internships where I contributed to developing and deploying machine learning solutions, further broadening my technical skill set. 
            While I am currently focused on back-end development, I am actively learning back-end technologies to evolve into a well-rounded full-stack developer. 
            I am driven by a passion for continuous learning and a desire to contribute to innovative and impactful projects.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[280px] lg:p-8">
          <div className="flex justify-center ring-4 ring-white rounded-xl overflow-hidden">
            <img src={profile} alt="profile picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;