// ex 6.1 - The secret of Obejcts in Elo js book
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vecOther) {
    return new Vec(this.x + vecOther.x, this.y + vecOther.y);
  }
  minus(vecOther) {
    return new Vec(this.x - vecOther.x, this.y - vecOther.y);
  }
  get length() {
    // getter
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let a = new Vec(8, 9);
console.log(a);
let b = new Vec(5, 5);
console.log(b);
let c = a.minus(b);
console.log(c);
console.log(c.length);

// ex 6.2 - GROUPS
class Group {
  constructor() {
    this.group = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    this.group = this.group.filter((v) => v != value);
  }

  has(value) {
    return this.group.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
		return new GroupIterator(this);
	}
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.group.length) {
      return { done: true };
    } else {
      let result = { value: this.group.group[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
