$(document).ready(function () {
  const EmployeeList = [
    {
      name: "안경호",
      phone: "01031234491",
      mail: "kyoungho.ahn@innoboost.co.kr",
      team: "Director",
      position: "CEO"
    }, {
      name: "김태영",
      phone: "01033023958",
      mail: "taeyoung.kim@innoboost.co.kr",
      team: "Director",
      position: "Creative Director"
    }, {
      name: "이주희",
      phone: "01086013320",
      mail: "juhee.lee@innoboost.co.kr",
      team: "Director",
      position: "Art Director"
    }, {
      name: "김택성",
      phone: "01087104701",
      mail: "taeksung.kim@innoboost.co.kr",
      team: "CreativeTeam 1",
      position: "Account Executive"
    }, {
      name: "류세진",
      phone: "01097472340",
      mail: "sejin.ryu@innoboost.co.kr",
      team: "CreativeTeam 1",
      position: "Graphic Designer"
    }, {
      name: "강미혜",
      phone: "01090370511",
      mail: "mihye.kang@innoboost.co.kr",
      team: "CreativeTeam 1",
      position: "Graphic Designer"
    }, {
      name: "김우진",
      phone: "01068601199",
      mail: "woojin.kim@innoboost.co.kr",
      team: "CreativeTeam 1",
      position: "Graphic Designer"
    }, {
      name: "박정은",
      phone: "01050213257",
      mail: "jeongeun.park@innoboost.co.kr",
      team: "CreativeTeam 1",
      position: "Account Executive"
    }, {
      name: "김보라",
      phone: "01068862386",
      mail: "bora.kim@innoboost.co.kr",
      team: "CreativeTeam 2",
      position: "Account Executive"
    }, {
      name: "최두진",
      phone: "01025901669",
      mail: "doojin.choi@innoboost.co.kr",
      team: "CreativeTeam 2",
      position: "Graphic Designer"
    }, {
      name: "장정례",
      phone: "01044004597",
      mail: "jeongrye.jang@innoboost.co.kr",
      team: "CreativeTeam 2",
      position: "Graphic Designer"
    }, {
      name: "염어진아",
      phone: "01086355224",
      mail: "eojina.yeom@innoboost.co.kr",
      team: "CreativeTeam 2",
      position: "Account Executive"
    }, {
      name: "강선희",
      phone: "01072837723",
      mail: "sunhee.kang@innoboost.co.kr",
      team: "CreativeTeam 2",
      position: "Graphic Designer"
    }, {
      name: "정유리",
      phone: "01071843007",
      mail: "yuri.jeong@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Account Executive"
    }, {
      name: "이영신",
      phone: "01097341729",
      mail: "youngshin.lee@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Graphic Designer"
    }, {
      name: "박승미",
      phone: "01028324643",
      mail: "seungmi.park@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Graphic Designer"
    }, {
      name: "이지선",
      phone: "01029359856",
      mail: "jisun.lee@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Account Executive"
    }, {
      name: "권현지",
      phone: "01046933272",
      mail: "hyunji.kwon@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Graphic Designer"
    }, {
      name: "이승훈",
      phone: "01028506485",
      mail: "seunghoon.lee@innoboost.co.kr",
      team: "CreativeTeam 4",
      position: "Account Executive"
    }, {
      name: "김정봉",
      phone: "01045150742",
      mail: "jeongbong.kim@innoboost.co.kr",
      team: "CreativeTeam 3",
      position: "Graphic Designer"
    }, {
      name: "이상현",
      phone: "01087575296",
      mail: "sanghyun.lee@innoboost.co.kr",
      team: "CreativeTeam 4",
      position: "Account Executive"
    }, {
      name: "김엄지",
      phone: "01043779377",
      mail: "umji.kim@innoboost.co.kr",
      team: "CreativeTeam 4",
      position: "Graphic Designer"
    }, {
      name: "유경아",
      phone: "01083894192",
      mail: "kyeongah.yoo@innoboost.co.kr",
      team: "Medical Contents",
      position: "Medical Writer"
    }, {
      name: "송미경",
      phone: "01035703190",
      mail: "mikyoung.kim@innoboost.co.kr",
      team: "Medical Contents",
      position: "Medical Writer"
    }, {
      name: "김선태",
      phone: "01099588734",
      mail: "suntae.kim@innoboost.co.kr",
      team: "Digital Destroyers",
      position: "Developer"
    }, {
      name: "김요한",
      phone: "01079204030",
      mail: "yohan.kim@innoboost.co.kr",
      team: "Digital Destroyers",
      position: "Developer"
    }, {
      name: "오혁근",
      phone: "01092403814",
      mail: "hyukkeun.oh@innoboost.co.kr",
      team: "Digital Destroyers",
      position: "Manager"
    }
  ];
  const table = document.getElementById("mytable");
  EmployeeList.forEach(function (employee) {
    var tr = document.createElement("tr");
    for (var key in employee) {
      var td = document.createElement("td");
      td.innerHTML = employee[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);

  });

  const selectTeamBox = document.getElementById("teamSelectBox");
  console.log(selectTeamBox);

  selectTeamBox.addEventListener("change", function () {
    const team = selectTeamBox.value;
    const tbody = document.getElementById('tableBody');
    let receiveNum = document.getElementById("receiveNum");
    $("#mytable").find("tr:not(:first)").remove();

    let numlist ="";
    
    switch (team) {
      case "Director":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "Director") {
            var tr = document.createElement("tr");
             numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
            
            
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;

      case "CreativeTeam 1":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "CreativeTeam 1") {
            var tr = document.createElement("tr");
            numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;

      case "CreativeTeam 2":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "CreativeTeam 2") {
            var tr = document.createElement("tr");
            numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;

      case "CreativeTeam 3":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "CreativeTeam 3") {
            var tr = document.createElement("tr");
            numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;

      case "Medical Contents":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "Medical Contents") {
            var tr = document.createElement("tr");
            numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;
      case "Digital Destroyers":
       numlist ="";
        EmployeeList.forEach(function (employee) {
          if (employee.team === "Digital Destroyers") {
            var tr = document.createElement("tr");
            numlist += employee.phone + ',';
            for (var key in employee) {
              var td = document.createElement("td");
              td.innerHTML = employee[key];
              tr.appendChild(td);
            }
            table.appendChild(tr);
          }
        })
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;
      default:
       numlist ="";
        EmployeeList.forEach(function (employee) {
          var tr = document.createElement("tr");
          numlist += employee.phone + ',';
          for (var key in employee) {
            var td = document.createElement("td");
            td.innerHTML = employee[key];
            tr.appendChild(td);
          }
          table.appendChild(tr);

        });
        numlist = numlist.slice(0,-1);
            receiveNum.value = numlist;
        break;

    }
  });

});

