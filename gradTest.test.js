// eslint-disable-next-line require-jsdoc
function createMenuData(data) {
  const items = [];

  data.forEach((item) => {
    const splitItems = item.split('/');

    if (splitItems.length > 1) { // Checks that the input array isn't empty
      const inArray = items.find((i) => {
        return i.title === splitItems[0]; // Checks for equality
      });
      if (inArray) {
        inArray.data.push(splitItems[1]);
      } else {
        items.push({
          title: splitItems[0],
          data: [splitItems[1]],
        });
      }
    }
  },
  );
  return items;
}

describe('menu Data Generator', () => {
  it('creates correct data structure ', () => {
    const data = [
      'parent1/parent1child',
      'parent1/parent1child2',
      'parent2/parent2child',
      'parent2/parent2child2',
      'parent1/parent1child3',
      'parent3',
      'parent3/parent3child1',
      'parent4',
    ];

    const expectedResult = [
      {
        title: 'parent1',
        data: ['parent1child', 'parent1child2', 'parent1child3'],
      },
      {
        title: 'parent2',
        data: ['parent2child', 'parent2child2'],
      },
      {
        title: 'parent3',
        data: ['parent3child1'],
      },
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
});

