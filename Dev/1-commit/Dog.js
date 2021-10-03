function Dog(Color, Weight){
    this.stomach = [];
    this.Color = Color;
    this.Weight = Weight; 
}
Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}