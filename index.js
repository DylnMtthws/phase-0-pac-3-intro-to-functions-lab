function shout(string) {
    return string.toUpperCase();
}

"Hello!".toUpperCase(); // 'HELLO!'

function whisper(string){
    return string.toLowerCase();
}

"Hello!".toLowerCase(); // 'hello!'

function logShout(string) {
    console.log(string.toUpperCase());
}

"Hello!".toUpperCase();

function logWhisper(string) {
    console.log(string.toLowerCase());
}

"Hello!".toLowerCase();

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
