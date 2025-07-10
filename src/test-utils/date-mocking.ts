
export const mockDate = (dateString: string) => {
  const mockDate = new Date(dateString);
  jest.useFakeTimers();
  jest.setSystemTime(mockDate);
};

export const restoreDate = () => {
  jest.useRealTimers();
};
