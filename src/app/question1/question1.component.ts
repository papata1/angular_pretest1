import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  inputTextValue: FormControl = new FormControl();
  dropdownValue: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  renderBoolean():boolean {
    let resultBool = false;
    let input = Math.ceil(this.inputTextValue.value);
    this.inputTextValue.setValue(input);
    if (this.dropdownValue.value == 1) {
      resultBool = this.isPrime(input)
    } else {
      resultBool = this.isFibonacci(input)
    }
    return resultBool;
  }

  isSquare(n: number):boolean {
    let s = Math.sqrt(n);
    return (s * s == n);
  } 

  isFibonacci(n: number):boolean {
    return this.isSquare(5 * n * n + 4) ||
    this.isSquare(5 * n * n - 4);;
  } 

  isPrime(num: number):boolean {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

}
