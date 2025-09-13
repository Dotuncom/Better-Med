import background from "../../assets/background.jpg";
import ExperienceDoctor from '../../assets/experience-doctor.jpg'
const ExperienceAndReach = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row">
          <div className="max-w-2xl space-y-8">
            <div className="text-gray-700 space-y-4">
              <h3 className="text-4xl font-Nuito font-medium">
                Experience and <span className="text-primary">Reach</span>
              </h3>
              <h4 className="tracking-5 text-2xl">
                The medical reach experience with Knowledge
              </h4>
            </div>
            <div>
                <p className="text-gray-700 leading-10 text-base">
Physicians, scientists and other medical experts dedicate a
              portion of their clinical time to this site, we are in the unique
              position to give you access to the knowledge and experience of
              Medical Physicians, scientists and other medical experts dedicate
              a portion of their clinical time to this site.
                </p>
              
            </div>
          </div>
          <div>
<img src={ExperienceDoctor} alt="experience doctors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndReach;
