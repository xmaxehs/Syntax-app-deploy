import { projectCardDetail } from "../constants";

const Projects = () => (
  <div className="relative w-full max-w-[1100px] h-[600px] flex justify-center items-center mx-auto my-[150px] md:h-[1400px] md:mt-[310px] md:mb-0 md:mx-auto" id="projects">
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <h3 className="text-[64px] font-bold text-primaryPurple mb-[70px] xs:text-[32px] md:ml-[30px]">
        My Projects
      </h3>
      <div className="max-w-[1100px] flex justify-center items-center md:flex-wrap">
        {projectCardDetail.map((card) => (
          <div
            key={card.id}
            className="lg:h-[360px] md:h-60 bg-cardColor max-w-[360px] h-60 flex flex-col justify-start items-center transition-[0.2s] duration-[ease-in-out] m-2.5 p-2.5 rounded-[10px] hover:transition-[0.2s] hover:duration-[ease-in-out] hover:scale-[1.06]"
          >
            <div className="max-w-[330px] h-2/5 flex justify-center bg-transparent items-center">
              <img
                src={card.ImgSrc}
                alt="project card image"
                className="bg-transparent w-20 h-20 border mr-[15px] p-2.5 rounded-[60px] border-solid border-primaryPurple"
              />
              <h4 className="text-2xl font-bold bg-transparent text-primaryWhite">{card.Title}</h4>
            </div>
            <div className="max-w-[330px] h-3/5 flex justify-center items-center mx-[5px] my-2.5 bg-transparent">
              <p className="text-lg font-normal bg-transparent text-primaryWhite whitespace-break-spaces xs:text-sm">
                {card.Description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
