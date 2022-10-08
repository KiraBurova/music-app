export const secondsToMinutes = (time: string) => {
  return (
    Math.floor(+time / 60) + ':' + ('0' + Math.floor(+time % 60)).slice(-2)
  );
};
