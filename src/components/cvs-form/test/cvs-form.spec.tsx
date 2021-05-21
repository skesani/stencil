import { newSpecPage } from '@stencil/core/testing';
import { CvsForm } from '../cvs-form';

describe('cvs-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CvsForm],
      html: `<cvs-form></cvs-form>`,
    });
    expect(page.root).toEqualHtml(`
      <cvs-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-form>
    `);
  });
});
