class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
    this.laser = false;
    this.boomerang = false;
    this.superspeed = false;
    this.teleportation = false;
  }
  attacked(damage) {
    //daca eroul are proprietatea canFly, sunt 50% sanse sa evite damage-ul
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flew away");
        damage = 0;
      }
    }
    // daca eroul are proprietatea shield, damage-ul este redus cu 20%
    if (this.shield) {
      damage *= 0.8;
      // damage-ul scade cu 0.2
      console.log(this.name + " defends with a shield");
    }

    if (this.superspeed) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " used his SuperSpeed and dodged the attack");
        damage = 0;
      }
    }

    this.hp -= damage;
    console.log(
      this.name +
        " has been attacked. HP reduced by " +
        damage +
        ". HP remaining : " +
        this.hp +
        "."
    );
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " attacked with damage: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Superhuman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.laser = true;
  }

  attack(otherHero) {
    let damage = 15;
    let chance = Math.random();
    if (this.laser === true && chance > 0.4) {
      damage *= 2;
      console.log(
        this.name +
          " used laser eyes and did " +
          damage +
          "! " +
          "double damage."
      );
    } else {
      console.log(this.name + " attacked with damage: " + damage + ".");
    }
    otherHero.attacked(damage);
  }
}

class Batman extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.boomerang = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 10;
    let chance = Math.random();
    if (this.boomerang === true && chance > 0.7) {
      damage *= 1.5;
      console.log(
        this.name + " used his boomerang and did " + damage + " damage."
      );
    } else {
      console.log(this.name + " attacked with damage: " + damage + ".");
    }
    otherHero.attacked(damage);
  }
}

class Flash extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.superspeed = true;
  }

  attack(otherHero) {
    let damage = 10;
    let chance = Math.random();
    if (this.superspeed === true && chance > 0.6) {
      damage *= 2;
      console.log(
        this.name +
          " used his SuperSpeed and threw The Infinte Mass Punch and did " +
          damage +
          "! double damage."
      );
    }
    otherHero.attacked(damage);
  }
}

class GreenLantern extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.laser = true;
  }

  attack(otherHero) {
    let damage = 10;
    let chance = Math.random();
    if (this.laser === true && chance > 0.6) {
      damage *= 1.5;
      console.log(
        this.name +
          " finished charging his laser beam and did " +
          damage +
          " damage."
      );
    }
    otherHero.attacked(damage);
  }
}

class Witch extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.teleportation = true;
  }

  attack(otherHero) {
    let damage = 15;
    let chance = Math.random();
    if (this.teleportation === true && chance > 0.7) {
      damage *= 1.5;
      console.log(
        this.name +
          " hit a cheap shot by teleporting behind and did " +
          damage +
          " double damage."
      );
    }
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0; // pt a stii al cui turn este si pot avea valori de 0 sau 1
  }

  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn; // se schimba tura din 1 in 0 si invers
  }

  findWinner() {
    if (this.hero1.hp > 0) {
      console.log(this.hero1.name + " won with " + this.hero1.hp + " HP left.");
      msgBox.innerHTML =
        this.hero1.name + " won with " + this.hero1.hp + " HP left.";
      return msgBox;
    } else if (this.hero2.hp > 0) {
      console.log(this.hero2.name + " won with " + this.hero2.hp + " HP left.");
      msgBox.innerHTML =
        this.hero2.name + " won with " + this.hero2.hp + " HP left.";
      return msgBox;
    } else {
      console.log("No heroes left alive.");
      msgBox.innerHTML = "It was an epic fight, but both Heroes died.";
      return msgBox;
    }
  }

  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);

    this.findWinner();
  }
}

let superman = new Superhuman("Superman", 110);
let wonderwoman = new Superhuman("Wonder Woman", 110);
let batman = new Batman("Batman", 100);
let flash = new Flash("The Flash", 90);
let greenLantern = new GreenLantern("Green Lantern", 100);
let scarletWitch = new Witch("Scarlet Witch", 100);
let epicFight2 = new Fight(flash, greenLantern);
let epicFight1 = new Fight(superman, batman);
let epicFight3 = new Fight(wonderwoman, scarletWitch);
let msgBox = document.querySelector(".box");

let fight1 = document.querySelectorAll(".fight1");
fight1.forEach((button) => {
  button.addEventListener("click", function () {
    epicFight1.go();
    msgBox.classList.remove("hide");
  });
});

let fight2 = document.querySelectorAll(".fight2");
fight2.forEach((button) => {
  button.addEventListener("click", function () {
    epicFight2.go();
    msgBox.classList.remove("hide");
  });
});

let fight3 = document.querySelectorAll(".fight3");
fight3.forEach((button) => {
  button.addEventListener("click", function () {
    epicFight3.go();
    msgBox.classList.remove("hide");
  });
});
