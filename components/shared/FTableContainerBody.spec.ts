import { mount } from '@vue/test-utils';
import FTableContainerBody from './FTableContainerBody.vue';

describe('FTableContainerBody', () => {
  it('renders table body with data and headers', () => {
    const headers: string[] = ['Username', 'Email', 'Score'];
    const data: { [key: string]: string | number }[] = [
      { Username: 'John Doe', Email: 'john@example.com', Score: 90 },
      { Username: 'Jane Smith', Email: 'jane@example.com', Score: 85 },
    ];

    const wrapper = mount(FTableContainerBody, {
      props: {
        headers,
        data,
      },
    });

    const tbody = wrapper.find('tbody');
    expect(tbody.exists()).toBe(true);

    const rows = tbody.findAll('tr');
    expect(rows.length).toBe(data.length);

    rows.forEach((row, rowIndex) => {
      const rowData = data[rowIndex];
      const cells = row.findAll('td');
      expect(cells.length).toBe(headers.length);

      headers.forEach((header, index) => {
        expect(cells[index].text()).toBe(rowData[header].toString());
      });
    });
  });
});
