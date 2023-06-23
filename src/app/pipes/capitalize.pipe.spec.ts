import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
  xit('Pipe transforme le text en uppercase', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('value')).toEqual("VALUE");
  });
});
