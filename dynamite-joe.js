// This is a js port for the hit demo dynamite joe

function newJoe() {
    var joe = {
        cool: 100,
        name: "Joe",
        run: () => { console.log("Go joe go"); },
        dynamite: () => { console.log("Throw joe throw"); }
    };

    return joe;
}

function newPolice() {
    var police = {
        cool: 100,
        name: "Sting",
        run: () => { console.log("Go sting go"); },
        getSquashed: () => { console.log("Oh no"); }
    };

    return police;
}
