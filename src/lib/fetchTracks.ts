import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCyd098HNgojYvQioSVSloJLFLUs5H16D_Q2ahpVmjHSWHb1liPD3xIJZ7vhR5g--4Ly8gZPjPMKz5msf7H5kNoypr8CK8XhgD3Uy_JOFHJgpSRg6R0x8YTjZrx456LQt4aIfTEwScIhDcBZBJnCdpUp2AOnV21uvoA5wTk01xGrETerHGEuNL02oEJDzxe3YxCuFW2ZEi_BrbAd9Y1_u4-vPqwMWDuS-J5PJxu3MMkvNGaL2n0BSXbYQHrbnHFjC-pIMwhcfVf2lA5pROvEhB2eooM1ANwIis87e5GgqY6yDRQzwQGXMTHBV_TozoDFP3LkkM3N4p0yUgja4U7VlJ5bYl3nfav0NPyrMOEtd2oXjY';

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
