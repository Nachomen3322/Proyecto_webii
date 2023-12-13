import React from 'react';

export const VideoComponent = () => {
  return (
    <div>
      <h1>Videos Educativos</h1>
      <video width="640" height="360" controls>
        <source src="tu_archivo_de_video.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

