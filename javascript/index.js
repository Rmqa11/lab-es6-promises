
// Iteration 1 | Make the mashed potatoes with callbacks

  getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
  getInstruction("mashedPotatoes", 1, (step1) => {
  document.querySelector( "#mashedPotatoes" ).innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 2, (step2) => {
  document.querySelector( "#mashedPotatoes" ).innerHTML += `<li>${step2}</li>`;

  getInstruction("mashedPotatoes", 3, (step3) => {
  document.querySelector( "#mashedPotatoes"  ).innerHTML += `<li>${step3}</li>`;

  getInstruction("mashedPotatoes", 4, (step4) => {
  document.querySelector( "#mashedPotatoes" ).innerHTML += `<li>${step4}</li>`;

  getInstruction( "mashedPotatoes",  5, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  },(error) => console.log(error));
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
  document.querySelector("#mashedPotatoesImg").style.display = "block";
  },(error) => console.log(error));
  },(error) => console.log(error));
  },(error) => console.log(error));
  },(error) => console.log(error));
});


// Iteration 2 | Make the stake with promises

  obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;

    // Bonus: Iteration 4 - Display the image

    document.querySelector("#steakImg").style.display = "block";
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  // Iteration 3 | Make the broccoli with async/await

  async function makeBroccoli() {
    try {
      let response0 = await obtainInstruction("broccoli", 0);
      document.querySelector("#broccoli").innerHTML += `<li>${response0}</li>`;

      let response1 = await obtainInstruction("broccoli", 1);
      document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;

      let response2 = await obtainInstruction("broccoli", 2);
      document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;

      let response3 = await obtainInstruction("broccoli", 3);
      document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;

      let response4 = await obtainInstruction("broccoli", 4);
      document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;

      let response5 = await obtainInstruction("broccoli", 5);
      document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;

      let response6 = await obtainInstruction("broccoli", 6);
      document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

      // Bonus: Iteration 4 - Display the image

      document.querySelector("#broccoliImg").style.display = "block";


    } catch (error) {
      console.log(error);
    }
  }
  
  makeBroccoli();


// Bonus: Iteration 5 - Promise.all()

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)
])
  .then((response) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[0]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[1]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[2]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[3]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[4]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[5]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[6]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[7]}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;

    // Bonus: Iteration 4 - Display the image

    document.querySelector("#brusselsSproutsImg").style.display = "block";
  })
  .catch((error) => {
    console.log(error);
});
