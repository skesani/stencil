import { newE2EPage } from '@stencil/core/testing';

describe('cvs-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cvs-input></cvs-input>');

    const element = await page.find('cvs-input');
    expect(element).toHaveClass('hydrated');
  });
});
