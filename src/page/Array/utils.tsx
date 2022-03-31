export const insert = (numbers: number[] | string[], value: number) => {
  const newArray = [...numbers];
  newArray[numbers.length] = value;
  return newArray;
};

export const insertFirst = (numbers: number[], value: number) => {
  const newArray = [...numbers];
  for (let i = newArray.length; i >= 0; i--) {
    newArray[i] = newArray[i - 1];
  }
  newArray[0] = value;
  return newArray;
};

export const getLength = (list:number[]) => `[length = ${list.length}]`;

export const removeFirst = (numbers: number[]) => {
  const newList = [...numbers];
  for (let i = 0; i < newList.length; i++) {
    newList[i] = newList[i + 1];
  }

  return newList;
};
