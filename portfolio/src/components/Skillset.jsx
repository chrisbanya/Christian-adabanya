import { SkillSetGrid } from "./SkillSetGrid";

export const Skillset = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-mono text-2xl">
          Professional <span className="text-red-600">Skillset</span>
        </h2>
      </div>
      <SkillSetGrid />
    </div>
  );
};
