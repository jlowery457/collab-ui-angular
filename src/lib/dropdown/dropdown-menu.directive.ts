import { Directive, ElementRef, Host, OnInit } from '@angular/core';

import { Dropdown } from './dropdown.directive';

@Directive({ selector: '[cui-dropdown-menu]' })
export class DropdownMenu implements OnInit {
  constructor(@Host() public dropdown: Dropdown, public el: ElementRef) {}

  public ngOnInit() {
    this.dropdown.dropDownMenu = this;
  }
}
