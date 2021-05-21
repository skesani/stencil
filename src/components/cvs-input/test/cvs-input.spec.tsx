import { newSpecPage } from '@stencil/core/testing';
import { CvsInput } from '../cvs-input';

describe('cvs-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CvsInput],
      html: `<cvs-input></cvs-input>`,
    });
    expect(page.root).toEqualHtml(`
      <cvs-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-input>
    `);
  });
});
