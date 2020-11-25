import { Component, OnInit } from '@angular/core';
import { Link } from 'src/link';

@Component({
  selector: 'app-personinfo',
  templateUrl: './personinfo.component.html',
  styleUrls: ['./personinfo.component.css']
})
export class PersoninfoComponent implements OnInit {
  links: Link[] = [];
  title='Patience is a key element of success';
  bill='If you think your teacher is tough, wait till you get a boss';
  bill2 =  'Life is not fair — get used to it!';
  constructor() { }

  ngOnInit(): void {
    this.links.push({url: "", text: ""});
    this.links.push({url: "", text: ""});
    this.links.push({url: "", text: ""});
  }

}
