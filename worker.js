self.onmessage = function(event) {
    const { cities, keyword } = event.data;
    const filteredCities = cities.filter(city => city.toLowerCase().includes(keyword));
    self.postMessage(filteredCities);
};
