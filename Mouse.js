function Mouse(name) {
    this.name = name;
    this.dead = fales;
}

Mouse.prototype.die = function() {
    this.dead = true; 
}

module.export = Mouse;