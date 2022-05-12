import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slidefade',[
      state('void',style({opacity: 0})),
      transition('void<=> *', [animate('1s')]),
      
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[]=[];
  @Input() isBanner: Boolean= false;

  
  currentSlideIndex:number=0;
  readonly imageSizes = IMAGE_SIZES;

  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(()=>{
        this.currentSlideIndex= ++this.currentSlideIndex % this.items.length;
      },5000);
    }
    
  }

}
