https://www.typescriptlang.org/play

```
class Engine {
  start(){
    console.log('Started');
  }
}

class Car{
  engine: Engine;
  constructor(){
    this.engine = new Engine();
  }
  start = this.engine.start;
}
```