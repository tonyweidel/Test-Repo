//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function octoCat(n,a) {
  this.name = n;
  this.arms = a;
  this.slap = function() {
    for(var a=0;a<this.arms; a++){
      console.log("You've slapped "+n+" "+a+" times"
    }
  }
}










//Write your 3 new octocat objects below here.
Octocat(Mitchell,8)
