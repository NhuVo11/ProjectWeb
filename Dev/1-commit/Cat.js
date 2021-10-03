function Cat(color,weight){
    this.color = color;
    this.weight = weight;
    this.stomach = [];
    cat({
        color: 'Yellow',
        weight : '200g'
    });
    
}
Cat.prototype.eat = function(Mouse){
    this.stomach.push(mouse);
}