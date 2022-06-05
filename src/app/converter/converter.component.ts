import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  coins:any = [
    {id:1, name: "Real", tag: 'R$'},
    {id:2, name: "Euro", tag: '€'},
    {id:3, name: "Dolar", tag: '$'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
