import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function PlayerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await getPlayersByGroup(group);

    const playerAlreadyExists = storedPlayers.filter((player) => {
      return player.name.includes(newPlayer.name);
    });

    if (playerAlreadyExists.length) {
      throw new AppError("Essa pessoa já está adicionada em um time.");
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...storedPlayers, newPlayer])
    );
  } catch (error) {
    throw error;
  }
}
