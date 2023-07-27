// https://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error
export const isPlaying = (video: HTMLVideoElement) =>
  video.currentTime > 0 &&
  !video.paused &&
  !video.ended &&
  video.readyState > video.HAVE_CURRENT_DATA
