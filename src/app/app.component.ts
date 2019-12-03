import { Component , OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public pause : boolean= false;  
  public  list: any [] =[];
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
    this.dataService.getData(this.date).subscribe( data =>{
    data.map(i=>{
      i.image=`https://epic.gsfc.nasa.gov/archive/natural/${this.year}/${this.month}/${this.day}/jpg/${i.image}.jpg`;
    })
    this.list=data;
    console.log(this.list);
   }
  );  

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

     this.dataService.getData(this.date).subscribe( data =>{
      data.map(i=>{
        i.image=`https://epic.gsfc.nasa.gov/archive/natural/${this.year}/${this.month}/${this.day}/jpg/${i.image}.jpg`;
      })
      this.list=data;
      console.log(this.list);      
      }
    );
  }

}
