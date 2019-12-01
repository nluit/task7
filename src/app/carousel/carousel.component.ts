import { Component, OnInit ,Input , ViewChild } from '@angular/core';
import { NgbCarouselConfig  , NgbCarousel} from '@ng-bootstrap/ng-bootstrap';  
import { DataService } from '../data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  private _pause : boolean;
  @Input() public date;
  @Input('list')  list:any =[];

  @Input() set pause(pause: boolean) {
    this._pause = pause ;
  } 
  get pause(): boolean {
    if(this._pause) {
      this.carousel.pause();      
    } 

    else this.carousel.cycle();
     return this._pause; 
    }
  constructor(config: NgbCarouselConfig,  private dataService: DataService) { 
    config.interval = 500;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
    config.showNavigationIndicators = false;  

  }  

  ngOnInit (){  
    
  }
  
}
