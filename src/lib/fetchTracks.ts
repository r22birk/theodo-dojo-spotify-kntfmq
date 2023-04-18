import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQAAL_kN0h4zqgRgqGGOwVOOCSDt5J2KaPPC5JDe9QWTWTljoDKX2ffFyHW16hmvTuFKu3Bw0kgXY-BEFzRt-tb2Xmf9d5ze6MDRVf0KuY8nzm4E4WQAjbak9w1opncvDRRvY5K_VosDUXFn0oRqtgQ8GSsqK0sQE0IYHOR53ffJoziJxMsGCEh5OR877cpzQc8x5FBjT6crDejM49d_3hYWYCoK2Hli1rQAP1z9CrmdTbCuFbVCEdNoD8Q_c_5a9sYoemfSNstQB-76F7IYXXj577MU2UbSolHjpmnHzbt9Guqzu1tPIIQ2QM0H7KJrshWil_A_gqNoo6MtznEFSj13l_sfFL3tDLVT6Y2Qr7dXng8';

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
