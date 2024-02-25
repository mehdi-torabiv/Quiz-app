import { mount } from '@vue/test-utils';
import FTableContainerHead from './FTableContainerHead.vue';

describe('FTableContainerHead', () => {
  it('renders table head with correct headers', () => {
    const headers = ['Username', 'Email', 'Score'];

    const wrapper = mount(FTableContainerHead, {
      props: { headers },
    });

    const thElements = wrapper.findAll('th');
    expect(thElements).toHaveLength(headers.length);
    headers.forEach((header, index) => {
      expect(thElements[index].text()).toBe(header);
    });
  });
});
