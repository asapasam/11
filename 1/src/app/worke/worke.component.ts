import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-worke',
  templateUrl: './worke.component.html',
  styleUrls: ['./worke.component.css'],
})
export class WorkeComponent implements OnInit {
  x: any;
  toggle0 = false;
  toggle10 = true;
  toggle = false;
  toggle1 = false;
  text: string = 'Lorem ipsum dolor sit amet.';
  textColor: string = '';
  Color: string = "";
  @ViewChild('colo') colo:any;
  @ViewChild('colors') colors:any;
  @ViewChild('some') some:any;
  textSize = '12px';
  fontFamily = ''
  textStyle = 'none';
  textWeight = 'none';
  toggle3 = false;
  toggle4 = false;
  toggle5 = false;
  toggle20 = false;
  toggle21 = false;
  TR: any;
  TD: any;
  WTD: any;
  HTD: any;
  WB: any;
  CB: any;
  selectedOption: string;
  selectedO: any;
  count: any;
  selectValue: any;
  etext: any;
  e: any;
  BC: any = 'red';



  // selectedValue: string;

  languages = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
    { id: 4, name: "yellow" },
    { id: 5, name: "black" }
  ]
  language = [
    { id: 1, name: "circle" },
    { id: 2, name: "disc" },
    { id: 3, name: "square" }
  ]
  lang = [
    { id: 1, name: "monospace" },
    { id: 2, name: "sans-serif" },
    { id: 3, name: "cursive" },
    { id: 4, name: "fantasy" },
  ]

  constructor() {
    this.selectedOption = 'Change';
    // this.selectedValue == 'Change';
  }

  ngOnInit(): void { }


  MyFNCTION(event:any) {
    const selectedElement = event.target;
    let selectedColor = selectedElement.style.backgroundColor;
    console.log(selectedColor);
    this.some.nativeElement.style.color = selectedColor;
  }

  MyFNCT(event:any) {
    const selectedElement = event.target;
    let selectedColor = selectedElement.style.backgroundColor;
    this.some.nativeElement.style.backgroundColor = selectedColor;
  }

  onChange(value: any) {
    this.some.nativeElement.style.fontFamily = value;
  }

  f() {
    this.etext = this.text;
  }

  myFun() {
    this.toggle = !this.toggle;
    this.toggle1 = false;
  }

  myFun1() {
    this.toggle1 = !this.toggle1;
    this.toggle = false;
  }

  myFun2() {
    this.toggle0 = !this.toggle0;

    this.toggle10 = !this.toggle10
  }
  myFun3() {
    this.text += `<p></p>`
  }
  myFun4() {
    this.text += `<h1></h1>`
  }

  myFun5() {
    this.text += `<h2></h2>`
  }
  myFun6() {
    this.text += `<h3></h3>`
  }
  myFun7() {
    this.text += `<h4></h4>`
  }
  myFun8() {
    this.text += `<h5></h5>`

  }
  myFun9() {
    this.text += `<h6></h6>`
  }
  myFun10() {
    let e = this.e;
    if (e = 11) {
      this.toggle10 = true;
      this.toggle0 = false;
    }
    else alert('Wrong password');
  }
  myF() {
    this.toggle3 = !this.toggle3;
    this.toggle4 = false;
  }

  F() {
    this.toggle4 = !this.toggle4;
    this.toggle3 = false;
  }

  fun() {
    this.toggle5 = !this.toggle5;
  }

  MyFNC() {
    this.toggle20 = !this.toggle20;
  }
  MyFN() {
    this.toggle21 = !this.toggle21;
  }

  funL() {
    const countLi = this.count
    const typeLi = this.selectedO
    this.text += `<ul style="list-style-type:${typeLi}">`
    for (let i = 0; i < countLi; i++) {
      this.text += `<li>item ${i + 1}</li>`
    }
    this.text += `</ul>`;

    this.toggle5 = false;
  }



  funT() {
    var i = 0;
    var tr = this.TR;
    const td = this.TD;
    const wtd = this.WTD;
    const htd = this.HTD;
    const wb = this.WB;
    const cb = this.selectedOption;


    this.text += `<table style="border: ${wb}px solid ${cb}">`;
    for (let i = 0; i < tr; i++) {
      this.text += `<tr>`;
      for (let j = 0; j < td; j++) {
        this.text += `<td width = "${wtd}px" height = "${htd}px">TD</td>`;
      }
      this.text += '</tr>'
    }
    this.text += `</table>`;
    console.log(this.text);
    this.toggle3 = false;
    this.toggle5 = false;
  }
}
