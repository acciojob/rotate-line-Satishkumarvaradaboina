//your JS code here. If required.
//your CSS code here. If required.
 
 
#line {
  width: 200px;
  height: 2px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 
 
//your JS code here. If required.
 
 
const line = document.getElementById('line');
let rotation = 0;
 
setInterval(() => {
  rotation += 5;
  line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}, 50);