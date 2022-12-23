// (function () {
//   console.log(this);
// })(); //logs the "window" object

function iHateThis() {
  console.log(this.name);
}

iHateThis(); //logs the "window" object

const myFavoriteObj = {
  name: "Marko Polo",
  yup: function () {
    console.log(this.name);
  },
  cool: { name: "sourav" },
  guessThis() {
    function getThis() {
      console.log(this.name);
    }
    getThis();
  },
  thisIsAnnoying(callback) {
    callback();
  },
};

// let name = "so";
myFavoriteObj.yup(); //logs the "window" object
myFavoriteObj.guessThis(); //logs the "window" object
myFavoriteObj.thisIsAnnoying(function () {
  console.log("THIs", this.name); //logs the "window" object
});
