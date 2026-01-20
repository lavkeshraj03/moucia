// Global in-memory flag (survives React remounts)
export let introHasPlayed = false;

export function markIntroPlayed() {
  introHasPlayed = true;
}