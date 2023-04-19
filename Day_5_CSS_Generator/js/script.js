document.addEventListener("DOMContentLoaded", () => {
  const allBorder = document.getElementById("all");
  const all_value = document.getElementById("all_value");
  const border_value = document.getElementById("border_value");
  const code = document.getElementById("code");
  const container = document.querySelector(".container");
  const btnCopy = document.querySelector("#btnCopy");
  const border_Style = document.getElementById("borderStyle");
  const borderSizeElement = document.getElementById("border_size");

  var all_radius = 10;
  var borderStyle = "solid";
  var borderPixel = 2;
  var coding = "";

  function BorderUpdate() {
    all_radius = allBorder.value;
    borderPixel = borderSizeElement.value;
    border_value.innerText = borderPixel + "px";
    all_value.innerText = all_radius + "px";
    coding = `
    border-radius:${all_radius}px;
    border:${borderPixel}px ${borderStyle} red;
    `;
    code.value = coding;
    container.style.cssText = coding;
  }

  allBorder.addEventListener("mousemove", BorderUpdate);
  allBorder.addEventListener("change", BorderUpdate);

  borderSizeElement.addEventListener("mousemove", BorderUpdate);
  borderSizeElement.addEventListener("change", BorderUpdate);

  btnCopy.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("code Copied");
  });

  BorderUpdate();
  border_Style.addEventListener("change", function () {
    borderStyle = this.value;
    BorderUpdate();
  });
});
