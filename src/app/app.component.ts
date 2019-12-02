import { Component , OnInit } from '@angular/core';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public pause : boolean= false;

  public list : object;
  public  date :string ='2019-06-27';
  public day: string='27';
  public month :string='06';
  public year: string='2019';

  getDate(event){  

    this.date=event; 
    this.year=this.date.slice(0,4);
    this.month=this.date.slice(5,7);
    this.day=this.date.slice(8,10);
    this.dataService.newdate=this.date;
    return  this.dataService.getData(this.date).pipe(map(data => { return data.map( item => `https://epic.gsfc.nasa.gov/archive/natural/${this.year}/${this.month}/${this.day}/jpg/${item.image}.jpg`
        );
      })
    ).subscribe(data => {
        this.list=data;
    });

  }
  
  onPause(){
    this.pause=true;
  }
  onPlay(){        
    this.pause=false;
  }
  constructor (private dataService: DataService ){};
  ngOnInit (){ 
    this.year=this.date.slice(0,4);
    this.month=this.date.slice(5,7);
    this.day=this.date.slice(8,10);
    this.dataService.newdate=this.date;
    return  this.dataService.getData(this.date).pipe(map(data => { return data.map( item => `https://epic.gsfc.nasa.gov/archive/natural/${this.year}/${this.month}/${this.day}/jpg/${item.image}.jpg`
        );
      })
    ).subscribe(data => {
        this.list=data;
    });
  }

}
