import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
    @Input() title="";
    @Output() newElement = new EventEmitter<string>
    onClick() {
        console.log("click");
        this.newElement.emit('shit')
    }
}
