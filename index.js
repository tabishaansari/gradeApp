function Resultcalculator() {
  let subject1Marks = +document.querySelector("#subject1Marks").value;
  let subject2Marks = +document.querySelector("#subject2Marks").value;
  let subject3Marks = +document.querySelector("#subject3Marks").value;
  let subject4Marks = +document.querySelector("#subject4Marks").value;
  let subject5Marks = +document.querySelector("#subject5Marks").value;
  let subject6Marks = +document.querySelector("#subject6Marks").value;

  let totalSubjectMarks =
    subject1Marks +
    subject2Marks +
    subject3Marks +
    subject4Marks +
    subject5Marks +
    subject6Marks;
  let parsantage = (totalSubjectMarks * 100) / 600;

  document.querySelector(
    "#totalSubjectMarks"
  ).innerHTML = `Total Subject Marks Is  ${totalSubjectMarks} / Out Of 600`;
  document.querySelector(
    "#parsantage"
  ).innerHTML = `Your Parsantage Is  ${parsantage}%`;

  if (parsantage >= 80 && parsantage <= 100) {
    document.querySelector("#Grade").innerHTML = " A1 GRADE";
  } else if (parsantage >= 70 && parsantage <= 80) {
    document.querySelector("#Grade").innerHTML = " A.GRADE";
  } else if (parsantage >= 60 && parsantage <= 70) {
    document.querySelector("#Grade").innerHTML = " B.GRADE ";
  } else if (parsantage >= 50 && parsantage <= 60) {
    document.querySelector("#Grade").innerHTML = " C.GRADE ";
  } else if (parsantage >= 40 && parsantage <= 50) {
    document.querySelector("#Grade").innerHTML = " D.GRADE ";
  } else {
    document.querySelector("#Grade").innerHTML = " Fail ); ";
  }
}
