import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/customsearch/v1';
const key = 'AIzaSyDnzmtj12p6roMg_sQJrgL4iTRrrlm3CnQ';
const cx = '015079701613406697772:oh4spijl5hq';

describe('API', () => {
  test('Images info come in right structure', async () => {
    const resp = await axios.get(baseUrl, {
      params: {
        key,
        cx,
        q: 'flowers',
        searchType: 'image',
      },
    });
    const images = resp.data.items;
    expect(images.length).toBeTruthy();
    expect(images[0].link).toBeDefined();
    expect(images[0].title).toBeDefined();
    expect(images[0].image.contextLink).toBeDefined();
  });
});
