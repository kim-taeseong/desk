import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  list = [{'nav': '할 일', 'router': 'todos'}, {'nav': '추가', 'router': 'todo-form'}];
  activeItem = this.list[0];
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
