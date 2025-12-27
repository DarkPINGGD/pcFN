const ADMIN_PASSWORD = "1234";

function login(){
  if(password.value === ADMIN_PASSWORD){
    loginBox.style.display="none";
    panel.classList.remove("hidden");
    loadLevels();
    loadRecords();
  }else alert("Wrong password");
}

/* ===== LEVELS ===== */
function loadLevels(){
  const levels = JSON.parse(localStorage.getItem("levels")) || [];
  levels.sort((a,b)=>a.rank-b.rank);

  levelsDiv.innerHTML="";
  levels.forEach((l,i)=>{
    levelsDiv.innerHTML+=`
      <div class="card">
        #<input value="${l.rank}" onchange="updateRank(${i},this.value)">
        <b>${l.name}</b><br>
        ${l.creator} | ${l.verifier}
        <br><button onclick="removeLevel(${i})">Delete</button>
      </div>
    `;
  });
}

function updateRank(i,val){
  const levels = JSON.parse(localStorage.getItem("levels")) || [];
  levels[i].rank = Number(val);
  localStorage.setItem("levels", JSON.stringify(levels));
  loadLevels();
}

/* ===== RECORDS ===== */
function loadRecords(){
  const records = JSON.parse(localStorage.getItem("records")) || [];
  recordsDiv.innerHTML="";

  records.filter(r=>!r.approved).forEach((r,i)=>{
    recordsDiv.innerHTML+=`
      <div class="card">
        <b>${r.nick}</b> – ${r.level}
        <br><a href="${r.yt}" target="_blank">Video</a>
        <br>
        <button onclick="approve(${i})">Approve</button>
        <button onclick="reject(${i})">Reject</button>
      </div>
    `;
  });
}

function approve(i){
  const records = JSON.parse(localStorage.getItem("records")) || [];
  records[i].approved = true;
  localStorage.setItem("records", JSON.stringify(records));
  loadRecords();
}

function reject(i){
  const records = JSON.parse(localStorage.getItem("records")) || [];
  records.splice(i,1);
  localStorage.setItem("records", JSON.stringify(records));
  loadRecords();
}
