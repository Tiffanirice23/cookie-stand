'use strict'
console.log('hi, Sheyna and Kale!');

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m', 'Total'];

function Store(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesSoldEachHourArray = [];
  this.dailyTotal = 0;

  this.generateRandomNumberOfCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  this.calculateCookiesPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
      let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.average);
      this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  }

  this.renderTableRow = function() {
    let tableRow = document.createElement('tr');
    document.getElementById('storeProfiles').appendChild(tableRow);

    let nameTd = document.createElement('td');
    nameTd.textContent = this.name;
    tableRow.appendChild(nameTd);

    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = this.cookiesSoldEachHourArray[i];
      tableRow.appendChild(tdElem);
    }
  }

  this.tableHeadRender = function() {
    let tHead = document.createElement('thead');
    document.getElementById('storeProfiles').appendChild(tHead);

    let tableRow = document.createElement('tr');
    tHead.appendChild(tableRow);

    let emptyTh = document.createElement('th');
    tableRow.appendChild(emptyTh);

    for (let i = 0; i < hours.length - 1; i++) {
      let thElem = document.createElement('th');
      thElem.textContent = `${hours[i]}`;
      tableRow.appendChild(thElem);
    }
  }

  this.calculateCookiesPerHour();
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.tableHeadRender();
Seattle.renderTableRow();

let Tokyo = new Store('Tokyo', 3, 24, 1.2);
Tokyo.renderTableRow();

// let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m', 'Total']
// Seattle Store
// let seattleContainer = document.getElementById("seattleList");
// let seattleStoreObj = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
/*  let calculateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
      let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.avg);
      this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  }*/

//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       seattleContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total : ${this.dailyTotal} cookies`;
//     seattleContainer.appendChild(li);

//   }
// }


// seattleStoreObj.calculateCookiesPerHour();
// seattleStoreObj.renderList();
// console.log(seattleStoreObj.cookiesSoldEachHourArray);
// console.log(seattleStoreObj.dailyTotal);

// // Tokyo Store

// let tokyoContainer = document.getElementById("tokyoList");
// let tokyoStoreObj = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//       let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },

//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total : ${this.dailyTotal} cookies`;
//     tokyoContainer.appendChild(li);

//   }
// }


// tokyoStoreObj.calculateCookiesPerHour();
// tokyoStoreObj.renderList();
// console.log(tokyoStoreObj.cookiesSoldEachHourArray);
// console.log(tokyoStoreObj.dailyTotal);

// // Dubai Store
// let dubaiContainer = document.getElementById("dubaiList");
// let dubaiStoreObj = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//       let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },

//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total : ${this.dailyTotal} cookies`;
//     dubaiContainer.appendChild(li);
//   }
// }


// dubaiStoreObj.calculateCookiesPerHour();
// dubaiStoreObj.renderList();
// console.log(dubaiStoreObj.cookiesSoldEachHourArray);
// console.log(dubaiStoreObj.dailyTotal);

// // Paris Store

// let parisContainer = document.getElementById("parisList");
// let parisStoreObj = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//       let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },

//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total : ${this.dailyTotal} cookies`;
//     parisContainer.appendChild(li);
//   }
// }


// parisStoreObj.calculateCookiesPerHour();
// parisStoreObj.renderList();
// console.log(parisStoreObj.cookiesSoldEachHourArray);
// console.log(parisStoreObj.dailyTotal);

// // Lima Store

// let limaContainer = document.getElementById("limaList");
// let limaStoreObj = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//       let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },

//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total : ${this.dailyTotal} cookies`;
//     limaContainer.appendChild(li);
//   }
// }


// limaStoreObj.calculateCookiesPerHour();
// limaStoreObj.renderList();
// console.log(limaStoreObj.cookiesSoldEachHourArray);
// console.log(limaStoreObj.dailyTotal);
