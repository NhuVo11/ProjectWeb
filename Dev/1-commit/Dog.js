function Dog(Color){
    this.stomach = [];
    this.Color = Color;
}
Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}