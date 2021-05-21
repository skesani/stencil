import { newE2EPage } from '@stencil/core/testing';

describe('cvs-input-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cvs-input-wrapper></cvs-input-wrapper>');

    const element = await page.find('cvs-input-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
