import { AboutTxt } from "./AboutTxt";
import Footer from "./Footer";
import { Skillset } from "./Skillset";
import { ToolsSection } from "./ToolsSection";

const About = () => (
  <>
    <section
      id="about"
      className="pt-24 pb-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <AboutTxt />
      <Skillset />
      <div>
        <div className="text-center mt-9">
          <h2 className="font-mono text-2xl">
            <span className="text-red-600">Tools</span> I Use
          </h2>
        </div>
        <ToolsSection />
      </div>
    </section>
    <Footer /> 
  </>
);

export default About;
