class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist
    }
}
const mySong = new Song ({
    artist: "Queen",
    name: "Youngohm",
    publishDate: 1999,

});
console.log(mySong);
