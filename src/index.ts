export {};

// Experimental support for decorators is a feature that is subject to change in a future release

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: any) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

const br = new BugReport('something went wrong.');
console.log(br.type);
