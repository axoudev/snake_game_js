class Pos{

    /**
     * Constructeur d'objets Pos
     * @param {Number} posX Position sur l'axe X
     * @param {Number} posY Position sur l'axe Y
     */
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    }

    /**
     * Change la position
     * @param {Pos} pos Nouvelle position
     */
    newPos(pos){
        this.posX = pos.posX;
        this.posY = pos.posY;
    }
}