const displayFunction = data => {
  let meanValue = '';
  const { cachedStats } = data;
  if (cachedStats && cachedStats.mean) {
    meanValue = cachedStats.mean.toFixed(2) + ' HU';
  }
  return meanValue;
};

export const ActiveContour = {
  id: 'ActiveContour',
  name: 'ActiveContour',
  toolGroup: 'allTools',
  cornerstoneToolType: 'ActiveContour',
  options: {
    measurementTable: {
      displayFunction,
    },
    caseProgress: {
      include: true,
      evaluate: true,
    },
  },
};
