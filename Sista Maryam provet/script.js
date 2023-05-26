function ChangeBgColor() {
    document.body.style.backgroundColor = "blue"
  }

  function AddHeader() {
    document.getElementById("demo").innerHTML = "Be the best version of you!";
  }

  function GetTime() {
    const CurrentTime = new Date();

    document.getElementById("time").innerHTML = CurrentTime
  }

  function ChangePicture() {
    document.getElementById("pic").src = "dice-6.png";
  }

  function HidePicture() {
    document.getElementById("pic").style.display = "none";
  }

  function ShowPicture() {
    document.getElementById("pic").style.display = "block";
  }

  function ShowHeader() {
    var Header = document.getElementById("EventDiv")
    Header.style.width = "100%";
    Header.style.backgroundColor = "gray";
    //Header.style.display = "flex"
    //Header.justify_content = "center"
    Header.textContent.textalign

    var Image = document.getElementById("pic");
    Image.style.border = "solid 5px green";
    Image.style.display = "block";
    Image.style.margin = "0 auto";

    var HeaderText = document.getElementById("demo");
    HeaderText.style.textAlign = "center";

    var TimeText = document.getElementById("time");
    TimeText.style.textAlign = "center";

  }

  function RemoveHeader() {
    const EventDiv = document.getElementById("EventDiv");

    for (let i = 0; i < EventDiv.children.length; i++) {
    const Child = EventDiv.children[i];
    
    Child.style.display = "none"
    }
  }

  function AddBackHeader() {
    const EventDiv = document.getElementById("EventDiv");

    for (let i = 0; i < EventDiv.children.length; i++) {
    const Child = EventDiv.children[i];

    if (Child.tagName === "IMG") {
        Child.style.display = "block"
    }
    else {
        Child.style.display = "block"
    }
    }
  }
