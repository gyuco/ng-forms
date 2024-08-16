import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  inject,
  HostListener,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appShowErrors]',
  standalone: true,
})
export class ShowErrorsDirective implements OnInit, OnDestroy {
  @Input() appShowErrors!: { [key: string]: string };
  private subscription!: Subscription;
  private isBlurred: boolean = false;

  control = inject(NgControl);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  ngOnInit() {
    if (this.control && this.control.statusChanges) {
      this.subscription = this.control.statusChanges.subscribe(() => {
        if (this.isBlurred && this.control.touched) {
          this.setErrorMessages();
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  @HostListener('focus')
  onFocus() {
    this.isBlurred = false;
    this.clearErrorMessages();
  }

  @HostListener('blur')
  onBlur() {
    this.isBlurred = true;
    if (this.control && this.control.touched) {
      this.setErrorMessages();
    }
  }

  private setErrorMessages() {
    const errors = this.control.errors;
    const container = this.elementRef.nativeElement.parentElement;

    const errorElements = container.querySelectorAll('.error-message');
    errorElements.forEach((element: any) => {
      this.renderer.removeChild(container, element);
    });

    if (errors) {
      Object.keys(errors).forEach((key) => {
        if (this.appShowErrors[key]) {
          const errorMessage = this.renderer.createElement('div');
          const text = this.renderer.createText(this.appShowErrors[key]);
          this.renderer.appendChild(errorMessage, text);
          this.renderer.addClass(errorMessage, 'error-message');
          this.renderer.setStyle(errorMessage, 'color', 'red');
          this.renderer.appendChild(container, errorMessage);
        }
      });
    }
  }

  private clearErrorMessages() {
    const container = this.elementRef.nativeElement.parentElement;
    const errorElements = container.querySelectorAll('.error-message');
    errorElements.forEach((element: any) => {
      this.renderer.removeChild(container, element);
    });
  }
}
