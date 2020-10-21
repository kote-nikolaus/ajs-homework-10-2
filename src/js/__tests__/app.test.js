import GameSavingLoader from '../app';

test('should parse the data', () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  return GameSavingLoader.load().then((data) => {
    expect(data).toBe(expected);
  });
});
