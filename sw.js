let members = [];

function addMember() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name && phone) {
        members.push({ name, phone });
        displayMembers();
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    }
}

function displayMembers() {
    let list = document.getElementById("memberList");
    list.innerHTML = "";

    members.forEach(member => {
        list.innerHTML += `<li>${member.name} - ${member.phone}</li>`;
    });
}
