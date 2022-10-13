const apiAddress = 'https://www.googleapis.com/youtube/v3/playlistItems';
const playlistId = 'PL6zlO7YlVzfWJ0AdcBfMe53QS1GAvJe_j';

const apiKey = 'AIzaSyCqU4GgH9ZYiJKHpmCW0zCkwj4DiYiDgtM';

module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: `/youtubeList`,
                destination: `${apiAddress}?part=snippet&key=${apiKey}&playlistId=${playlistId}&maxResults=50`
            },
            {
                source: `/youtubeList/:token`,
                destination: `${apiAddress}?part=snippet&key=${apiKey}&playlistId=${playlistId}&maxResults=50&pageToken=:token`
            }
        ];
    }
};
