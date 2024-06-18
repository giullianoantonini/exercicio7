interface IAnimal {
  nome: string;
  especie: string;
  idade: number;
  emitirSom(): string;
}

class Animal implements IAnimal {
  constructor(
    public nome: string,
    public idade: number,
    public especie: string
  ) {}

  public emitirSom(): string {
    return "Classe Animal está emitindo um som";
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "canino");
  }

  public emitirSom(): string {
    return "Este cão está latindo.";
  }
}

class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "felino");
  }

  public emitirSom(): string {
    return "Este gato está miando.";
  }
}

const cachorro = new Cachorro("Nami", 1.5);
console.log(cachorro);
console.log(cachorro.emitirSom());

const gato = new Gato("Arya", 7.5);
console.log(gato);
console.log(gato.emitirSom());
