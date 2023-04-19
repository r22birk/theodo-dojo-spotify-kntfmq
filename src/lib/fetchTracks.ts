import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQA62ZmO9-bcZzivov72HQQWsHXOTEb-Yvzl6x3cBQkdMcRJGdzQvSv_qPFeQUGK7Z_rj1UyBIS--84LXqXzMl9A0EjJ-7hM7S4nK7H9srDayTQpPYVEq4UqaldVG_760Ndg_6q1LP8al5tuaOoy5c5b6q8PeYvYxAfQrYABG5suLIe9KnIBcTbcDe5jWzfHD1_fhRhpjNiD7HSwwq4N7H2cTFrISVkX7ZhVEISkcJqBNbzxPfWdKVb_qvmQD2-ILpaKJABS0FF858IikpFx9kLy0v7oF2bkihQQhaL8Qg7zKAsyqBfUz0UUZd_m_DkxhR36-R9jyCnAoYU-3qhfVs-ZkKyon5zLFUUOWLOROzxGszM';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
