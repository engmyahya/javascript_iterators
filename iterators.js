// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(songsArray) {
    songsArray.forEach((song) => {
        console.log(song.name);
    });
}
listNames(songs);
// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(songsArray) {
    songsArray.forEach((song) => {
        console.log(`${song.name} (${song.duration})`);
    });
}
listSongDetails(songs);
// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount() {
    var targetMonths = [6, 7, 8];
    songs.forEach((song) => {
        targetMonths.forEach((month) => {
            if (month == song.month)
                count = count + 1;
        })
    }, count = 0);
    console.log(count);
}
summerJamCount();
// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations(songsArr) {
    return songsArr.map((song) => {
        return song.duration;
    });
}
console.log(getDurations(songs));
// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationInSeconds(songsArr) {
    return songsArr.map((song) => {
        var durationArr = song.duration.split(':');
        return `song : ${song.name} with duration : ${parseInt(durationArr[0]) * 60 + parseInt(durationArr[0])} seconds.`;
    })
}
console.log(getDurationInSeconds(songs));
// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(songsArr) {
    return songsArr.map((song) => {
        if (song.artist.indexOf('featuring') > -1) {
            return song.artist.split('featuring')[0];
        }
        else
            return song.artist;
    })
}

console.log(getMainArtists(songs));
// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(songsArr) {
    return songsArr.filter((song) => {
        return parseInt(song.weeksAtNumberOne) >= 10;
    });
}
console.log(getBigHits(songs));
// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(songsArr) {
    return songsArr.filter((song) => {
        durationInSeconds = (function (duration) {
            var durationArr = duration.split(':');
            return parseInt(durationArr[0]) * 60 + parseInt(durationArr[0])
        })(song.duration);

        if (durationInSeconds < 180)
            return true;
        else
            return false;
    });
}
console.log(getShortSongs(songs));
// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(songsArr, artistName) {
    var filteredSongs = songsArr.filter((song) => {
        return song.artist == artistName;
    });
    return filteredSongs;
}
console.log(getSongsByArtist(songs, 'Taylor Swift'));
// Refactor summerJamCount to use reduce!
function summerJamCount_usingReduce(songsArr) {
    var validMonthes = [6, 7, 8];
    return songsArr.reduce((accu, song, index, songsArr) => {
        if (validMonthes.find((validMonth) => { return validMonth == song.month })) {
            accu = accu + 1;
        }
        return accu;
    }, 0);
}
console.log(`summerJamCount_usingReduce : ${summerJamCount_usingReduce(songs)}`);
// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(songsArr) {
    return songsArr.reduce((accu, song, index, songsArr) => {
        durationInSeconds = (function (duration) {
            var durationArr = duration.split(':');
            return parseInt(durationArr[0]) * 60 + parseInt(durationArr[0])
        })(song.duration);
        accu = accu + durationInSeconds;
        return accu;
    }, 0);
}
console.log(`getTotalDurationInSeconds : ${getTotalDurationInSeconds(songs)}`);
// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(songsArr) {
    var artistObjResult = songsArr.reduce((artistObj, song, index, songsArr) => {
        var objArtist = songsArr.reduce((obj, _song) => {
            if (song.artist == _song.artist) {
                obj.ArtistName = song.artist;
                obj.count = obj.count + 1;
            }
            return obj;
        }, { 'ArtistName': '', count: 0 });

        if (objArtist) {
            artistObj[objArtist.ArtistName] = objArtist.count;
        }
        return artistObj;
    }, {});
    return JSON.stringify(artistObjResult);
}
console.log(`getSongCountByArtist : ${getSongCountByArtist(songs)}`);
// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(songsArr) {
    var weeksSum =  songsArr.reduce((accu, song, index, songsArr) => {
        accu = song.weeksAtNumberOne + accu;
        return accu;
    }, 0);
    return Math.floor(weeksSum/(songs.length));
}
console.log(`averageWeeksAtNumberOne : ${averageWeeksAtNumberOne(songs)}`);



























