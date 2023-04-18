import { SavedTrack } from 'spotify-types';

const apiToken = 'BQAi0GgIP2k2oMN-ubdqXF91yxHkg7QDKXx-yX9rVV93qMJh1IMFfYv2TH8DxkfPQAB9Mt86Bqw0sUdooswM8vrbgp5ZiLvrfKAEjW3Wp-HL2iR6TMf3Mw2_t6FmVzPg_i1hpOzGRXtDa2vufNmNspW7RmGHoPag7b_LVFdm4mPR771s21Fhe1BXefWGlqNcvq1bZGGeUnApaY5qOO1CITirNlkJOTE-pLLUUNHuRDyKV2fFkfkUrsYRYwEUOSKrMZ1kXpZdmADRp0dcCEot3lyR_hWZF6nbFpyrO4aaA_HwFY6yJtTzgLgsCDY0Mr8iWkpwxyt4Q5i0Vig20-uqZhdcvz4fQKAImJJgvqff7oSBzaY';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};
