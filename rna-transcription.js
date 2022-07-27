//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (RNA) => {
  let conversion= "";
  for (let index = 0; index < RNA.length; index++) {
    conversion+= to(RNA[index]);
  }
  return conversion;
};
function to(RNA) {
  switch (RNA){
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      return "";
  }
}
