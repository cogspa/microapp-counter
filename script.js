const countEl = document.getElementById("count");
let n = 0;
const set = v => { n = v; countEl.textContent = n; };

document.getElementById("inc").onclick = () => set(n + 1);
document.getElementById("dec").onclick = () => set(n - 1);
document.getElementById("reset").onclick = () => set(0);
