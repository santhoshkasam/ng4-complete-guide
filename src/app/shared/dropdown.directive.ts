import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
   @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    //If we want the dropdown to be closed by anywhere on document click. 
    //Remember to add elRef to constructor property
    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //   }
}