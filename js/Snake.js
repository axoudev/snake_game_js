class Snake{

    /**
     * Constructeur d'objets Snake
     * @param {Number} speed Vitesse du Serpent
     * @param {Number} step Nombre de pixels par déplacements
     * @param {Number} lenght Taille du serpent
     * @param {Pos} position Position x et y du Serpent
     * @param {Dir} direction Direction x et y du serpent
     * @param {Number} dimension Dimension des Cases du Serpent
     * @param {String} color Couleur des Cases du Serpent
     * @param {String} borderColor Couleur de la bordure des Cases du Serpent
     */
    constructor(speed, step, lenght, position, direction, dimension, color, borderColor){
        this.speed = speed;
        this.lenght = lenght;
        this.position = position;
        this.direction = direction;
        this.dimension = dimension;
        this.color = color;
        this.borderColor = borderColor;
        this.step = step;
        this.cases = [];
        this.createStartCases();
        this.lastCasePos = new Pos(0,0);
        this.tempCasePos = new Pos(0,0);
        this.nbMoveSinceLastDirection = 0;
    }

    /**
     * Crée les cases de départ du serpent en fonction du paramètre longueur(length) envoyée dans le constructeur.
     */
    createStartCases(){
        let i = 0;
        let casePosX = this.position.posX;
        let casePosY = this.position.posY;
        while(i < this.lenght){
            this.cases.push(new Case(this.dimension, new Pos(casePosX, casePosY), this.color, this.borderColor));
            casePosX -= this.dimension;
            i++; 
        }
    }

    /**
     * Fait avancer le serpent en fonction des paramètres step et direction
     */
    move(){
        this.lastCasePos.newPos(this.cases[0].position);
        this.cases[0].position.posX += this.step * this.direction.dirX;
        this.cases[0].position.posY += this.step * this.direction.dirY;
        for(let i = 1; i < this.cases.length; i++){
            this.tempCasePos.newPos(this.cases[i].position);
            this.cases[i].position.newPos(this.lastCasePos);
            this.lastCasePos.newPos(this.tempCasePos);
        }
        this.nbMoveSinceLastDirection ++;
    }

    /**
     * Dessine les Cases du Serpent sur le board
     * @param {Board} board Le plateau de jeu
     */
    draw(board){
        for(let element in this.cases){
            this.cases[element].draw(board.canvas2D);
        }
    }

    /**
     * Donne une direction au serpent
     * @param {Number} newDdirX Nombre entre -1 et 1
     * @param {Number} newDdirY Nombre entre -1 et 1
     */
    newDir(newDdirX, newDdirY){
        this.direction.newDir(newDdirX, newDdirY);
        this.nbMoveSinceLastDirection = 0;
    }

    /**
     * Ajoute des cases au Serpent
     * @param {Number} nbCase Nombre de cases à ajouter
     */
    add(nbCase){
        for(let i = 0; i < nbCase; i++){
            this.cases.push(new Case(this.dimension, new Pos(this.cases[this.cases.length - 1].position.posX - this.dimension * this.direction.dirX, this.cases[this.cases.length - 1].position.posY - this.dimension * this.direction.dirY),this.color, this.borderColor));
        }
    }
}
