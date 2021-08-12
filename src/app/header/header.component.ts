import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  selectedTarget = new EventEmitter<string>();

  onSelect(target: string) {
    this.selectedTarget.emit(target);
  }

  constructor() {}

  ngOnInit(): void {}
}
