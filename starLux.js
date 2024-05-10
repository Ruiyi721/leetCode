const stationInfos = [
  {
    stationCode: 'T1',
    expectArrivalTime: '17:50',
    test: 'test'
  },
  {
    stationCode: 'T2',
    expectArrivalTime: '14:50',
    test: 'test'
  },
  // {
  //   stationCode: 'FOC',
  //   expectArrivalTime: '18:50',
  //   test: 'test'
  // },
];

function formatBusTime(stationInfos) {
  const fieldsOrder = ['FOC', 'T1', 'T2', 'FOC2'];
  const stations = {};
  let focCount = 0;
  
  const isFOCFirst = stationInfos.findIndex((item) => item.stationCode === 'FOC');

  stationInfos.forEach((item) => {
    const { stationCode, expectArrivalTime } = item;
    if (stationCode === 'FOC') {
      focCount++; // 1
      stations[focCount === 1 && isFOCFirst === 0 ? 'FOC' : 'FOC2'] = expectArrivalTime;
    } else {
      stations[stationCode] = expectArrivalTime;
    }
  });

  console.log(fieldsOrder.map(stationCode => stations[stationCode] || '-'));

  return fieldsOrder.map(stationCode => stations[stationCode] || '-');
}

formatBusTime(stationInfos);