module.exports = {
  COLOR_RANGE : 255,
  beautifulGreys : [
    "#193441",
    "#2f4854",
    "#465c66",
    "#5e707a",
    "#75858d",
    "#8c99a0",
    "#a3adb3",
    "#bac2c6",
    "#d1d6d9",
    "#e8eaec",
    "#ffffff",
    "#ffffff"
  ],
  randomNumber : function(maxNumber){
    return Math.floor(Math.random()*maxNumber);
  },
  randomColor : function(){
    var r = this.randomNumber(this.COLOR_RANGE),
        g = this.randomNumber(this.COLOR_RANGE);
        b = this.randomNumber(this.COLOR_RANGE);
    return ('rgb('+r+','+g+','+b+')');
  },
  randomTransparentColor : function(transparency){
    var r = this.randomNumber(this.COLOR_RANGE),
        g = this.randomNumber(this.COLOR_RANGE);
        b = this.randomNumber(this.COLOR_RANGE);
    return ('rgba('+r+','+g+','+b+','+transparency+')');
  },
  randomGrey : function(){
    var hue = this.randomNumber(this.COLOR_RANGE);
    return ('rgb('+hue+','+hue+','+hue+')');
  },
  randomTransparentGrey : function(transparency){
    var hue = this.randomNumber(this.COLOR_RANGE);
    return ('rgba('+hue+','+hue+','+hue+','+transparency+')');
  },
  randomBeautifulGrey : function(){
    var grey = this.beautifulGreys[Math.floor(Math.random()*this.beautifulGreys.length)]
    return grey;
  },
  randomColorIn : function(colorArray){
    return colorArray[Math.floor(Math.random()*colorArray.length)];
  }
}
