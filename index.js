import Cache from "./src/Cache.js";

const c = new Cache(5);

c.set(4);
c.set(1);
c.set(5);
c.set(3);

c.get(3);
c.get(5);

console.log(c.show())