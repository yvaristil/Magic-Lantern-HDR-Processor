import { createFFmpeg, fetchFile } from 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.2/dist/ffmpeg.min.js';

const ffmpeg = createFFmpeg({ log: true });

document.getElementById('processBtn').addEventListener('click', async () => {
  const file = document.getElementById('videoInput').files[0];
  if (!file) return alert("Please select a video source!!!");

  await ffmpeg.load();

  ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));

  // Extract frames from video
  await ffmpeg.run('-i', 'input.mp4', '-vf', 'fps=30', 'frame_%03d.png');

  const files = ffmpeg.FS('readdir', '.').filter(f => f.endsWith('.png'));
  console.log('Extracted frames:', files);

  // (To-do) Now load two frames at a time, blend them using Canvas, then re-encode
});
