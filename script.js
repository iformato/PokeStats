var currentPoke = prompt("Pokemon please: (n to cancel) ");
{
    const fs = require("fs");
    let file = fs.readFileSync("usagestats.txt", "utf8");
    let arr = file.split(/\r?\n/);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(currentPoke)){
            var x = arr[i];
            break;
        }
    }

    var y = x.toString;
    var y = x.slice(31,40);
    console.log(y);
    }

