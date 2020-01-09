export const consentOptions = [
  {
    label: 'Receive newsletter',
    value: 'newsletter',
  },
  {
    label: 'Be shown targeted ads',
    value: 'ads',
  },
  {
    label: 'Contribute to anonymous visit statistics',
    value: 'stats',
  },
]

export const consentOptionsState = consentOptions.reduce((obj, item) => {
  return {
    ...obj,
    [item.value]: false,
  };
}, {});