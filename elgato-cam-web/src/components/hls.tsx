'use client'
import React, { useEffect } from 'react';
import Hls, { type HlsConfig } from 'hls.js';

const HlsPlayer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && Hls.isSupported()) {
      const video = document.getElementById('video') as HTMLVideoElement;

      const hlsConfig: Partial<HlsConfig> = {
        liveBackBufferLength: 3,
        maxLiveSyncPlaybackRate: 1.1,
        liveSyncDuration: 0.5,
        liveMaxLatencyDuration: 2,
        enableWorker: true,
        loader: class extends Hls.DefaultConfig.loader {
          abort() {}
          destroy() {}
        },
      };

      const hls = new Hls(hlsConfig);
      hls.loadSource('http://localhost:8000/stream.m3u8');
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        hls.destroy();
      };
    }
  }, []);

  return (
    <div>
      <video
        id="video"
        autoPlay
        playsInline
        muted
        className='w-[90vw] rounded-4xl'
      />
    </div>
  );
};

export default HlsPlayer;