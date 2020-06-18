

export const decodedValue = (array) => {
  
  const COLOR_ARRAY = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  
  return Number(array.map(color => COLOR_ARRAY.indexOf(color)).slice(0, 2).join(""))
  
};

