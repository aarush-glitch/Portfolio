import React, { useState, createContext, useContext } from "react";

export type SkillOption = { name: string; value: number };
export const skillOptions: SkillOption[] = [
  { name: "C++", value: 8 },
  { name: "DSA", value: 8 },
  { name: "Next.js", value: 5 },
  { name: "MySQL", value: 7 },
  { name: "AWS", value: 6 },
  { name: "Git", value: 8 },
];

function useSkillConfidence() {
  const [selectedSkill, setSelectedSkill] = useState<SkillOption>(skillOptions[0]);
  const [sliderValue, setSliderValue] = useState<number>(skillOptions[0].value);
  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const skill = skillOptions.find(s => s.name === e.target.value);
    if (skill) {
      setSelectedSkill(skill);
      setSliderValue(skill.value);
    }
  };
  return { selectedSkill, setSelectedSkill, sliderValue, setSliderValue, handleSkillChange };
}

const SkillConfidenceContext = createContext<ReturnType<typeof useSkillConfidence> | null>(null);
export function SkillConfidenceProvider({ children }: { children: React.ReactNode }) {
  const store = useSkillConfidence();
  return <SkillConfidenceContext.Provider value={store}>{children}</SkillConfidenceContext.Provider>;
}
export function useSkillConfidenceStore() {
  const ctx = useContext(SkillConfidenceContext);
  if (!ctx) throw new Error("SkillConfidenceProvider missing");
  return ctx;
}

export function SkillConfidenceInputs() {
  const { selectedSkill, sliderValue, setSliderValue, handleSkillChange } = useSkillConfidenceStore();
  return (
    <div className="flex flex-col gap-6">
      <label className="text-white font-semibold mb-2">Choose a skill:</label>
      <select
        className="bg-[#181726] text-white rounded-lg px-4 py-2 mb-2 border border-white/10"
        value={selectedSkill.name}
        onChange={handleSkillChange}
      >
        {skillOptions.map(skill => (
          <option key={skill.name} value={skill.name}>{skill.name}</option>
        ))}
      </select>
      <label className="text-white font-semibold mb-2">How confident do you think I am? <span className="text-[#43e7ad]">{sliderValue}</span></label>
      <input
        type="range"
        min={1}
        max={10}
        value={sliderValue}
        onChange={e => setSliderValue(Number(e.target.value))}
        className="w-full accent-[#43e7ad]"
      />
    </div>
  );
}

export function SkillConfidenceFeedback() {
  const { selectedSkill, sliderValue } = useSkillConfidenceStore();
  let feedback = "";
  const diff = sliderValue - selectedSkill.value;
  if (Math.abs(diff) <= 1) {
    feedback = `Pretty accurate! I am this much confident in ${selectedSkill.name}.`;
  } else if (Math.abs(diff) === 2 || Math.abs(diff) === 3) {
    feedback = diff > 0
      ? `I have a little more experience in ${selectedSkill.name} than you guessed.`
      : `I have a little less experience in ${selectedSkill.name} than you guessed.`;
  } else if (diff > 3) {
    feedback = `Well, you must have way too much confidence in me for ${selectedSkill.name}!`;
  } else if (diff < -3) {
    feedback = `Give me a chance to prove my skills in ${selectedSkill.name}!`;
  }
  return (
    <div className="mt-4 text-white text-base font-medium bg-[#181726] rounded-xl p-4 border border-white/10 shadow">
      {feedback}
    </div>
  );
}
