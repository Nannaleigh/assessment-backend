
  const itemForm = document.querySelector('#item-form')
  const itemInput = document.querySelector('#item-input')
  const itemDisplay = document.querySelector('#item-display')

  document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  
//goal box
    let textBox = document.querySelector(".goal");
    let paragraphGoal = document.querySelector(".paragraph-goal");
    
    function displayGoal(goal) {
      let t = document.createTextNode(goal);
      paragraphGoal.appendChild(t);
    }
    
    document.querySelector(".send-goal").onclick = function () {
      axios
        .post("http://localhost:4001/api/goal", { goal: textBox.value })
        .then(function (res) {
          displayGoal(res.data.goal);
        });
    };