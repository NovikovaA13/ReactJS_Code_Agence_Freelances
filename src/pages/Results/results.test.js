import { timesThree } from './index';
test(`Should <1`, () => {
   const expectedState = 6;
   expect(timesThree(2)).toBe(6);
});

/**
 * import { returnParamsModifyed } from './index';
 describe(`Should test returnParamsModifyed`, () => {
   it('Should 1', () => {
      const expectedState = 'a1=true&a2=true&3=false';
      expect(
         returnParamsModifyed({
            1: true,
            2: true,
            3: false,
         })
      ).toEqual(expectedState);
   });
   it('Should 2', () => {
      const expectedState = 'a1=false';
      expect(
         returnParamsModifyed({
            1: false,
         })
      ).toEqual(expectedState);
   });
});

 */
