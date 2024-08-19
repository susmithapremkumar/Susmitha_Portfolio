import resume from "../assets/Susmitha_Resume.PDF"; 

const Resume = () => {
  return (
    <div className="mt-10 flex flex-wrap flex-col border border-brown-700 items-center  rounded-lg px-4 py-4 justify-evenly mb-16">
      <p className="text-4xl text-center font-semibold">
        Download resume for details
      </p>
      <a href={resume} download="Susmitha_Resume.PDF">
        <button className="bg-red-900 px-6 py-2 font-semibold mt-4 rounded-2xl text-lg hover:bg-white hover:text-red-900 transition duration-300 ease-in-out">
          Download
        </button>
      </a>
    </div>
  );
};

export default Resume;