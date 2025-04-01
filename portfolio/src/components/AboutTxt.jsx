import sandy from "/assets/rb_4803.png";

export const AboutTxt = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 ">
      <div className="basis-1/2 ">
        <div className="justify-center p-5">
          <div>
            <h2 className="text-xl text-center pt-8 font-mono">
              <span className="text-red-600">Creating Solutions</span>, One Line
              of Code at a Time.
            </h2>
          </div>
          <div className="text-center pt-14 text-wrap">
            <p className="text-lg font-mono pt-3">
              Hi, I&apos;m <span className="text-red-600">Christian</span>, a
              frontend developer passionate about building seamless and
              user-friendly web applications. My journey into tech has been
              anything but conventional, and I&apos;ve documented my transition
              from pharmacy to development in{" "}
              <a
                className="text-blue-500"
                href="https://dev.to/christian_adabanya_c3f428/why-i-traded-a-pharmacy-degree-for-a-career-in-tech-2g3h"
                target="_blank"
              >
                this blog post
              </a>{" "}
              . With expertise in React, TypeScript, and modern web
              technologies, I thrive on crafting solutions that are both
              visually appealing and functionally robust.
            </p>
            <p className="mt-4 text-lg font-mono">
              For me, development is about creating solutions that make lives
              easier. My background in pharmacy gives me a unique perspective on
              precision, problem-solving, and user needs—qualities I bring to
              every project I work on.
            </p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 place-items-start">
        <img src={sandy} alt="photo from freepik" />
      </div>
    </div>
  );
};
