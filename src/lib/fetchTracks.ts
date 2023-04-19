import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQDpNFwYbAGARnqsDepzOwOjSI1h0U7P_BMCLJNSxxaA6XpTMJZzsbz1lPNrYJ2XvCvmmh1b73BDXp-kdsEFQY8glBa1gZX10ORDovC78o83ZV5fTVamIKldFQZ7fz_6Q752vc_c0aONQeSV-u2fbTJZTHDo6K7q9F2gwmZWaxLhOsgatk0khFhukfsKpCJgUjRBq00_EuLZwu0-6cFMrw_DGxLX_pWSqhuWeua9uyy0UOiQdfbZAgXQ44OBDTwuQMzBt5PqWzfZ6dblyAHfpp30tbBOEJarZ3r6PWarvyz8d4bArO2K-1TWUZo9t3W2ofe9Q_g77W5jo9LLX2HxqKfahCyIecfeC1r3PfKxECXxF70';

export const fetchTracks = async () => {
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
