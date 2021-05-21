import { newSpecPage } from '@stencil/core/testing';
import { CvsInputWrapper } from '../cvs-input-wrapper';

describe('cvs-input-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CvsInputWrapper],
      html: `<cvs-input-wrapper></cvs-input-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cvs-input-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-input-wrapper>
    `);
  });
});
