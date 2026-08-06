function addUserInfo(){
    
    const UserTable=
    document.querySelector("#userTable");
    const fName=
    document.querySelector("#fName");
    const lName=
    document.querySelector("#lName");
    const pNum=
    document.querySelector("#pNum");
    const cNum=
    document.querySelector("#cNum");
    const tArea=
    document.querySelector("#tArea");

    const stRow = document.createElement("tr");
    const fnameCell = document.createElement("td");
    const lnameCell = document.createElement("td");
    const pnumCell = document.createElement("td");
    const cnumCell = document.createElement("td");
    const tareaCell = document.createElement("td");

    fnameCell.innerHTML = fName.value;
    lnameCell.innerHTML = lName.value;
    pnumCell.innerHTML = pNum.value;
    cnumCell.innerHTML = cNum.value;
    tareaCell.innerHTML = tArea.value;

    stRow.appendChild(fnameCell);
    stRow.appendChild(lnameCell);
    stRow.appendChild(pnumCell);
    stRow.appendChild(cnumCell);
    stRow.appendChild(tareaCell);

    UserTable.appendChild(stRow);

    fName.value="";
    lName.value="";
    pNum.value="";
    cNum.value="";
    tArea.value="";
}
export default addUserInfo;