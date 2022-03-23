import { GridFilterPipe } from './grid-filter.pipe';

const pipe = new GridFilterPipe();

const data = [
  {
    id: 1,
    name: 'Jon Doe',
    email: 'john@test.com',
  },
  {
    id: 2,
    name: 'jane Doe',
    email: 'Jane@test.com',
  },
  {
    id: 3,
    name: 'Marco Polo',
    email: 'marco@test.com',
  },
  {
    id: 4,
    name: 'Albert Einstein',
    email: 'albert@test.com',
  },
];

describe('GridFilterPipe', () => {
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return filtered results by key value', () => {
    const filter = { key: 'name', value: 'Alb' };
    expect(pipe.transform(data, filter)).toEqual([{ ...data[3] }]);
  });

  it('should return original array if there no value in filter', () => {
    const filter = { key: 'name', value: '' };
    expect(pipe.transform(data, filter)).toEqual([...data]);
  });
});
