class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        this.alvo = alvo
        this.habilidade = habilidade
    }
}
class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id
        this.nome = nome
        this.dano = dano
        this.custo = custo
        this.energia = energia
    }
}
hero = new Personagem("Lula", "HEROI👆", 500, 0, 100)
boss = new Personagem("Falizeu", "BOSS🪨", 1000, 0, 150)

document.getElementById("nome-heroi").textContent =`${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `${hero.titulo}`;

document.getElementById("nome-boss").textContent =`${boss.nome}`;
document.getElementById("titulo-boss").textContent = `${boss.titulo}`;