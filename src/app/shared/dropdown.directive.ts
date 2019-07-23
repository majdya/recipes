import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false;

  //   @HostListener("click") toggleOpen(event: Event) {
  //     this.isOpen = !this.isOpen;
  //     if (this.isOpen) {
  //       "open";
  //     } else {
  //       "";
  //     }
  //   }

  // close dropdown from any place of the app
  @HostListener("document:click", ["$event"])
  toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
