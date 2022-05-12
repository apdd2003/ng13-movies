import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import {IMAGE_SIZES} from '../../constants/image-sizes';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null= null;
 
  imageSizes = IMAGE_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
