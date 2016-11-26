/**
 * Created by Роман on 26.11.2016.
 */

//==================================== Завдання 1 ======================================================
function getRandomNumber()
{
    return Math.floor(Math.random() * 10);
}

var Task1 = {
    "LENGTH_ARR": 10,
    "arr":[],
    "sumOfArr":0,
    "timeOfCreateArr":0,
    "timeOfSortUp":0,
    "timeOfSortDown":0,
    "CreateElems":function(){
        if (this.arr.length == 0) {
            var StartTime = new Date();
            for (var i = 0; i < this.LENGTH_ARR; i++) {
                this.arr.push(getRandomNumber());
            }
            var EndTime = new Date();
            this.timeOfCreateArr = EndTime - StartTime;
        }
        else {
            this.arr = [];
            StartTime = new Date();
            for (i = 0; i < this.LENGTH_ARR; i++) {
                this.arr.push(getRandomNumber());
            }
            EndTime = new Date();
            this.timeOfCreateArr = EndTime - StartTime;
        }
    },
    "SortArrUp": function() {
        var StartTime = new Date();
        this.arr.sort(function (a, b) {
            if (a > b) return 1; else return -1;
        });
        var EndTime = new Date();
        this.timeOfSortUp = EndTime - StartTime;
    },
    "SortArrDown": function(){
        var StartTime = new Date();
        this.arr.sort(function (a, b) {
            if (a < b) return 1; else return -1;
        });
        var EndTime = new Date();
        this.timeOfSortDown = EndTime - StartTime;
    },
    "SummingOfArr": function() {
        this.sumOfArr = this.arr.reduce(function (sum, currValue) {
            return sum += currValue;
        }, 0);
    },
    "Show":function () {
        this.CreateElems();
        this.SummingOfArr();
        console.log("Створений масив:");
        console.log(this.arr);
        console.log("Масив відсортований по зменшенню:");
        this.SortArrDown();
        console.log(this.arr);
        console.log("Масив відсортований по збільшенню:");
        this.SortArrUp();
        console.log(this.arr);
        console.log("Сумма масива ", this.sumOfArr, ", час створення масива - ", this.timeOfCreateArr,
                    ", час сортування по убиванню - ", this.timeOfSortDown, ", час сортування по наростанню - ",
                    this.timeOfSortUp,".");
    }
};
//==================================================================================================================


//================================================Завдання 2=====================================================
function minValue(a, b) {
    if (a < b) return a; else return b;
}

var Task2 = {
    "matrixA":[60, 80, 100],
    "matrixB":[40, 60, 80, 60],
    "matrixC":[ [1, 3, 4, 2], [4, 5, 8, 3], [2, 3, 6, 7] ],
    "matrixD":[ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0] ],
    "pointer":{
        "A":0,
        "B":0
    },
    "direction":"R",
    "ChangeDirection":function () {
        if (this.direction == "R") this.pointer.B++; else this.pointer.A++;
        if (this.direction == "R") this.direction = "D"; else this.direction = "R";
    },
    "MakePlan": function () {
        var min = 0;
        while (this.pointer.A < this.matrixA.length)
        {
            min = minValue(this.matrixA[this.pointer.A], this.matrixB[this.pointer.B]);
            this.matrixA[this.pointer.A] -= min;
            this.matrixB[this.pointer.B] -= min;
            this.matrixD[this.pointer.A][this.pointer.B] = min;
            this.ChangeDirection();
        }
    },
    "Show":function () {
        this.MakePlan();
        console.log("Опорний план має такий вигляд:");
        this.matrixD.forEach(function (elms) {
            console.log(elms[0],elms[1],elms[2],elms[3]);
        })
    }
};
//==================================================================================================================


function HomeWorkJS1() {
    console.log(Task1.Show());
    console.log(Task2.Show());
}

