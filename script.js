
const  malenames =["Kwame","Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"]

const proxy = new Proxy(malenames, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    }
});
var x=proxy[-3]
alert(x)