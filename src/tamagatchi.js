export class Tamagatchi
{

  constructor(name)
  {
    this.name = name;
    this.foodLevel = 50;
    this.sleepLevel = 100;
    this.playLevel = 75;
  }

  //These are the drain amounts

  hungerDrain()
  {
    setInterval(() =>
    {this.foodLevel--;
    }, 1000);
  }

  sleepDrain()
  {
    setInterval(() =>
    {this.sleepLevel--;
    }, 1000);
  }

  playDrain()
  {
    setInterval(() =>
    {this.playLevel--;
    }, 1000);
  }


  //These are the functions to feed/sleep/play with the Tamagatchi

  feed() {
    this.foodLevel += 10;
  }

  sleep() {
    this.sleepLevel += 10;
  }

  play() {
    this.playLevel += 10;
  }


  didTamagatchiDie()
  {
    if(this.foodLevel === 0 || this.sleepLevel === 0 || this.playLevel === 0)
    {
      return true;
    }
    else return false;
  }


}
