import { newSpecPage } from '@stencil/core/testing';
import { CvsSecurityQuestions } from '../cvs-security-questions';

describe('cvs-security-questions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CvsSecurityQuestions],
      html: `<cvs-security-questions></cvs-security-questions>`,
    });
    expect(page.root).toEqualHtml(`
      <cvs-security-questions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cvs-security-questions>
    `);
  });
});
