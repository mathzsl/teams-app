import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export async function getPlayersByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const playersByGroup: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    return playersByGroup;
  } catch (error) {
    throw error;
  }
}
