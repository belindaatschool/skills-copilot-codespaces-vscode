function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "1") {
        document.getElementById("skillsMember").innerHTML = "Member: " + memberText;
    } else {
        document.getElementById("skillsMember").innerHTML = "Member: " + memberText;
    }
}