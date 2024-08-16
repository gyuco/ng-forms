import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appLettersOnly]',
  standalone: true,
})
export class LettersOnlyDirective {
  elementRef = inject(ElementRef);
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    const regex = /^[a-z A-Z]*$/;

    if (!regex.test(key)) {
      event.preventDefault();
    }
  }
}
