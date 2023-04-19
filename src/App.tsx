import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchTracks } from './lib/fetchTracks';
import swal from 'sweetalert';

const App = () => {
  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];
  
  const [trackIndex, setTrackIndex] = useState(0)
  
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }

  const { data: tracks, isLoading } = useQuery({
      queryKey: ['tracks'],
      queryFn: fetchTracks
  });

  const currentTrack = tracks?.[trackIndex];
  const track1 = tracks?.[0];
  const track2 = tracks?.[1];
  const track3 = tracks?.[2];

  console.log(tracks?.length);

  const checkAnswer = (id) => {
    console.log(id);
    if (id == trackIndex) {
      swal('Bravo', 'Sous-titre', 'success');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        {isLoading ? <p>Loading...</p> : 
        <>
          <audio src={currentTrack?.track.preview_url} autoPlay controls />
          <p><AlbumCover track={currentTrack} /></p>
          <p>{currentTrack?.track.name}</p>
        </>
        }
      </div>
      <div className="App-buttons">
        <button onClick={() => checkAnswer(0)}>{track1?.track.name}</button>
        <button onClick={() => checkAnswer(1)}>{track2?.track.name}</button>
        <button onClick={() => checkAnswer(2)}>{track3?.track.name}</button>
      </div>
    </div>
  );
};

const AlbumCover = ({ track }) =>  {
  const src = track.track.album.images[0].url;
  return (
      <img src={src} style={{ width: 400, height: 400 }} />
  );
}

export default App;
