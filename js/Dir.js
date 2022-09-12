class Dir{

    /**
     * Constructeur d'objets Dir
     * @param {Number} dirX Direction sur l'axe X : Nombre entre 1 et -1
     * @param {Number} dirY Direction sur l'axe Y : Nombre entre 1 et -1
     */
    constructor(dirX, dirY){
        this.dirX = dirX;
        this.dirY = dirY
    }

    /**
     * Change la direction
     * @param {Number} x Direction sur l'axe X : Nombre entre 1 et -1
     * @param {Number} y Direction sur l'axe Y : Nombre entre 1 et -1
     */
    newDir(x,y){
        this.dirX = x;
        this.dirY = y;
    }
}