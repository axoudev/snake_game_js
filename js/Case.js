class Case{

    /**
     * Constructeur d'objets Case
     * @param {Number} dimension Dimension du carré
     * @param {Pos} position Position x et y de la Case
     * @param {String} color Couleur de la case
     * @param {String} borderColor Couleur des bordures de la Case
     */
    constructor(dimension, position, color, borderColor){
        this.dimension = dimension;
        this.position = position;
        this.color = color;
        this.borderColor = borderColor;
    }

    /**
     * Fait bouger la Case
     * @param {Dir} direction Direction du mouvement
     * @param {Number} step Nombre de pixels par mouvement
     */
    move(direction, step){
        this.position.posX += direction.dirX * step;
        this.position.posY += direction.dirY * step;
    }

    /**
     * Donne une nouvelle position à la Case
     * @param {Number} x Position sur l'axe X
     * @param {Number} y Position sur laxe Y
     */
    newPos(x, y){
        this.position.posX = x;
        this.position.posY = y;
    }

    /**
     * Affiche la case sur le board
     * @param {CanvasRenderingContext2D} canvas2D L'espace 2D
     */
    draw(canvas2D){
        canvas2D.fillStyle = this.color;
        canvas2D.strokeStyle = this.borderColor;
        canvas2D.fillRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
        canvas2D.strokeRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
    }
}