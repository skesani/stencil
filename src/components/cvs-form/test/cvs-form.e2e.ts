import { newE2EPage } from '@stencil/core/testing';

describe('cvs-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cvs-form></cvs-form>');

    const element = await page.find('cvs-form');
    expect(element).toHaveClass('hydrated');
  });
});
