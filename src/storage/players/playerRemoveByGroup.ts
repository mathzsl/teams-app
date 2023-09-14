import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function playerRemoveByGroup(group: string, playerName: string) {
  try {
    const storedPlayers = await getPlayersByGroup(group);

    const filteredPlayers = storedPlayers.filter(
      (player) => !player.name.includes(playerName)
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(filteredPlayers)
    );
  } catch (error) {
    throw error;
  }
}
