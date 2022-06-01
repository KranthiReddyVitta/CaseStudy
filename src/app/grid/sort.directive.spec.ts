import { SortDirective } from './sort.directive';

describe('SortDirective', () => {
  it('should create an instance', () => {
    const directive = new SortDirective();
    expect(directive).toBeTruthy();
  });

  it('should provide input', () => {
    const directive = new SortDirective();
    directive.sortable = 'name';
    directive.direction = 'asc';
    directive.rotate();
    expect(directive.direction).toEqual('desc');
  });
});
