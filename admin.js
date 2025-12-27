const ADMIN_PASSWORD = "1234";

const loginBox = document.getElementById("login");
const panel = document.getElementById("panel");

function login(){
  const pw = document.getElementById("password").value;
  if(pw === ADMIN_PASSWORD){
    loginBox.style.display = "none";
    panel.classList.remove("hidden");
    loadLevels();
  }else{
    alert("Wrong password");
  }
}

function loadLevels(){
  const levels = JSON.parse(localStorage.getItem("levels")) || [];
  const list = document.getElementById("levels");
  list.innerHTML = "";

  levels.sort((a,b)=>a.rank-b.rank).forEach((l,i)=>{
    list.innerHTML += `
      <div class="card">
        #${l.rank} <b>${l.name}</b><br>
        Creator: ${l.creator} | Verifier: ${l.verifier}
        <br><button onclick="removeLevel(${i})">Delete</button>
      </div>
    `;
  });
}

function addLevel(){
  const levels = JSON.parse(localStorage.getItem("levels")) || [];

  levels.push({
    rank: Number(rank.value),
    name: name.value,
    creator: creator.value,
    verifier: verifier.value
  });

  localStorage.setItem("levels", JSON.stringify(levels));
  loadLevels();
}

function removeLevel(index){
  const levels = JSON.parse(localStorage.getItem("levels")) || [];
  levels.splice(index,1);
  localStorage.setItem("levels", JSON.stringify(levels));
  loadLevels();
}
