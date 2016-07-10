import {Component, OnInit, Input, Output} from '@angular/core';
//import {OnInit} from '@angular/core';

@Component({
    selector: 'test-component',
    inputs: ['name'],
    outputs: [],
    template: require('./test.component.html')
})

export class TestComponent implements OnInit{
  //@Input() name = "";
  ngOnInit() {
    //this.name = name;
    //console.log("name: " + this.name);
  }

}
