import { getPlayersByGroup } from "./getPlayersByGroup";

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getPlayersByGroup(group);
    const groupPlayers = storage.filter((player) => player.team.includes(team));
    return groupPlayers;
  } catch (error) {
    throw error;
  }
}
