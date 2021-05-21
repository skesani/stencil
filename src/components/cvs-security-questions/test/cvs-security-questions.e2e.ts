import { newE2EPage } from '@stencil/core/testing';

describe('cvs-security-questions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cvs-security-questions></cvs-security-questions>');

    const element = await page.find('cvs-security-questions');
    expect(element).toHaveClass('hydrated');
  });
});
