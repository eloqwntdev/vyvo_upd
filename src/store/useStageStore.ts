// store/useStageStore.js
import { create } from "zustand";

type Stage = "start" | "submit" | "thinking" | "audio";

export interface StageStore {
  currentStage: Stage;
  isModalOpen: boolean;
  setCurrentStage: (stage: Stage) => void;
  setIsModalOpen: (value: boolean) => void;
  cycleStage: () => void;
}

const stages: Stage[] = ["start", "submit", "thinking", "audio"];

const useStageStore = create<StageStore>((set) => ({
  currentStage: stages[0], // Start with "audio" stage as the initial value
  isModalOpen: false,
  setCurrentStage: (stage: Stage) => set({ currentStage: stage }),
  setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
  // Function to cycle to the next stage
  cycleStage: () =>
    set((state) => {
      const nextStageIndex =
        (stages.indexOf(state.currentStage) + 1) % stages.length;
      return { currentStage: stages[nextStageIndex] };
    }),
}));

export default useStageStore;
