import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem:ElementRef) { }

  private backgroundColor(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
  private color(action:string){
    this.elem.nativeElement.style.color = action;
    
  };
  

  @HostListener('mouseenter')onMouseEnter(){
    this.color('#F0F8FF');
    this.backgroundColor('#405061')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color('');
    this.backgroundColor('')
  }


}
