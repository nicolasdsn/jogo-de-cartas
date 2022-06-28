import api from "./api";

// "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

export const getDeckId = async () => {
  const { data } = await api.get("new/shuffle/?deck_count=1");
  return data.deck_id;
};
