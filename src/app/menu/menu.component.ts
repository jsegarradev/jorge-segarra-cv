import {Component, OnInit} from '@angular/core';
interface Language {
  name: string;
  code: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  cities: Language[] | undefined;

  selectedCity: Language | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'English', code: 'NY' },
      { name: 'Spanish', code: 'RM' },
      { name: 'Arabic', code: 'LDN' }
    ];
  }
}
