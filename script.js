let count = 0;

document.getElementById("increment").onclick = () => {
  count++;
  document.getElementById("count").textContent = count;
};

document.getElementById("decrement").onclick = () => {
  count--;
  document.getElementById("count").textContent = count;
};

document.getElementById("reset").onclick = () => {
  count = 0;
  document.getElementById("count").textContent = count;
};
