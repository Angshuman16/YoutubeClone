export function filterData(searchtext, videos) {
    const filterdta = videos.filter(() =>
      videos.title?.toLowerCase()?.includes(searchtext.toLowerCase())
      );
    return filterdta;

  }