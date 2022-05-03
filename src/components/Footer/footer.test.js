import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './index';
describe('Footer', () => {
   test('Should render without crashing', async () => {
      render(<Footer />);
      const nightModeButton = screen.getByRole('button');
      expect(nightModeButton.textContent).toBe('Changer le theme ☀️');
      nightModeButton.fireEvent();
      expect(nightModeButton.textContent).toBe('Changer le theme 🌙');
   });
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
