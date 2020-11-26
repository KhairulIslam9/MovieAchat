import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links: Link[]
  
  constructor() { }

  ngOnInit(): void {
    this.links = [
      {url : '/login', title : 'Login'}
    ]
  }
  toggleVisible(index : number) {
    this.links[index].isVisible = !this.links[index].isVisible
  }
}
