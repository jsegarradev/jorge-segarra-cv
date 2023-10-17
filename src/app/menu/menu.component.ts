import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
interface Language {
  name: string;
  code: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  languages: Language[] | undefined;

  selectedCity: Language | undefined;

  items: MenuItem[];

  constructor() {
    this.languages = [];
    this.selectedCity = {name: '', code: '' };
    this.items = [];
  }

  ngOnInit() {
    this.languages = [
      { name: 'English', code: 'NY' },
      { name: 'Spanish', code: 'RM' },
      { name: 'Arabic', code: 'LDN' }
    ];

    this.items = [
      {
        icon: 'home-icon',
        label: 'label',
        command: () => {

        }
      },
      {
        icon: 'education-icon',
        command: () => {
        }
      },
      {
        icon: 'experience-icon',
        command: () => {
        }
      },
      {
        icon: 'stack-icon',
        command: () => {
        }
      },
      {
        icon: 'contact-icon',
        command: () => {
        }
      }
    ];
  }
}
