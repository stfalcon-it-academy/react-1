export const size = {
  x: 10,
  y: 20,
};

export const figures = [
  [[1, 0], [1, 1], [0, 1]],
  [[0, 1], [1, 1], [1, 0]],
  [[1, 1], [1, 1]],
  [[1], [1], [1], [1]],
  [[0, 1, 0], [1, 1, 1]],
  [[1, 0, 0], [1, 1, 1]],
  [[0, 0, 1], [1, 1, 1]],
];

export const getInitialWall = () => {
  const wall = [];
  for (let y = 0; y < size.y; y++) {
    wall.push([]);
    for (let x = 0; x < size.x; x++) {
      wall[y].push(false);
    }
  }
  return wall;
};

export const getInitialFigurePosition = () => ({
  x: size.x / 2 - 1,
  y: 0,
});

const cloneWall = wall => wall.map(line => line.map(cell => cell));

export const getFigure = () => figures[Math.round(Math.random() * (figures.length - 1))];

export const getWallWithFigure = (wall, figure, position) => {
  const wallWithFigure = wall.map(line => line.map(cell => cell));

  for (let y = 0; y < figure.length; y++) {
    for (let x = 0; x < figure[y].length; x++) {
      wallWithFigure[y + position.y][x + position.x] = !!figure[y][x] || wall[y + position.y][x + position.x];
    }
  }
  return wallWithFigure;
};

export const isEnoughFreeSpace = (wall, figure, position) => {
  for (let y = position.y; y < position.y + figure.length; y++) {
    for (let x = position.x; x < position.x + figure[y - position.y].length; x++) {
      if (x < 0 || x >= size.x || y >= size.y || (wall[y][x] && figure[y - position.y][x - position.x])) {
        return false;
      }
    }
  }
  return true;
};

export const getNewPositionDown = (wall, figure, position) => {
  const newPosition = {
    x: position.x,
    y: position.y + 1,
  };
  const enough = isEnoughFreeSpace(wall, figure, newPosition);
  return enough ? newPosition : false;
};

export const getNewPositionLeft = (wall, figure, position) => {
  const newPosition = {
    x: position.x - 1,
    y: position.y,
  };
  const enough = isEnoughFreeSpace(wall, figure, newPosition);
  return enough ? newPosition : false;
};

export const getNewPositionRight = (wall, figure, position) => {
  const newPosition = {
    x: position.x + 1,
    y: position.y,
  };
  const enough = isEnoughFreeSpace(wall, figure, newPosition);
  return enough ? newPosition : false;
};

export const getRotatedFigure = (wall, figure, position) => {
  let rotatedFigure = [];

  for (let y = 0; y < figure.length; y++) {
    for (let x = 0; x < figure[y].length; x++) {
      rotatedFigure[x] = rotatedFigure[x] || [];
      rotatedFigure[x].push(figure[figure.length - y - 1][x]);
    }
  }
  const newPosition = {
    x: rotatedFigure[0].length + position.x >= size.x ? size.x - rotatedFigure[0].length : position.x,
    y: position.y,
  };
  if (isEnoughFreeSpace(wall, rotatedFigure, newPosition)) {
    return {
      figure: rotatedFigure,
      figurePosition: newPosition,
    };
  }
};

const clearLine = (wall, lineNumber) => {
  for (let x = 0; x < size.x; x++) {
    wall[lineNumber][x] = false;
  }
  for (let y = lineNumber - 1; y >= 0; y--) {
    for (let x = 0; x < size.x; x++) {
      wall[y + 1][x] = wall[y][x];
    }
  }
};

export const getWallWithCleanedLines = wall => {
  const newWall = cloneWall(wall);
  let counter = 0;
  for (let y = 0; y < size.y; y++) {
    for (let x = 0; x < size.x; x++) {
      if (!newWall[y][x]) {
        break;
      }
      if (x === size.x - 1) {
        clearLine(newWall, y);
        counter++;
      }
    }
  }
  return {
    wall: newWall,
    counter,
  };
};
