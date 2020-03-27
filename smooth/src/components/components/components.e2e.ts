import { newE2EPage } from '@stencil/core/testing';

describe('sm-components', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sm-components></sm-components>');

    const element = await page.find('sm-components');
    expect(element).toHaveClass('hydrated');
  });
});
