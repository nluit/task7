import { Component, OnInit ,Input , ViewChild , Output ,  EventEmitter} from '@angular/core';
import { NgbCarouselConfig  , NgbCarousel  } from '@ng-bootstrap/ng-bootstrap';  
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  private _pause ;
  public slide;
  public obj : object={} ;
  @Input() public date;
  @Input('list')  list:any =[];
  
  @Input() set pause(pause: boolean) {
    this._pause = pause ;
    this.SendData.emit( this.obj);  
  } 
  @Output('data') SendData = new EventEmitter <any> ();

  onSlide(event) {
      this.slide = parseInt(event.current.replace("slideId_", ""), 10);
      this.obj['x']=this.list[Number(this.slide)].lunar_j2000_position.x;
      this.obj['y']=this.list[Number(this.slide)].lunar_j2000_position.y;
      this.obj['z']=this.list[Number(this.slide)].lunar_j2000_position.z;
      this.obj['slide']=this.slide;
  }
  get pause(): boolean {
    
    if(this._pause) {
      this.carousel.pause();   
      this.SendData.emit( this.obj);   
      // console.log(this.obj);
    } 

    else this.carousel.cycle();
     return this._pause; 
    }
  constructor(config: NgbCarouselConfig ) { 
    config.interval = 1000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
    config.showNavigationIndicators = false;  
   
  }  

  ngOnInit (){     
  }
  
}
