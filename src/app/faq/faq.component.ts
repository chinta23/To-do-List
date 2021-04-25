import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { PaladionService } from '../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
acc: any;
allFaqs: any;

  constructor(private paladionService: PaladionService) {
    this.getAllFaqs();
   }

  
   toggleMe(event) {
 
    event.path[0].classList.toggle("active");
    var panel = event.path[0].nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 

   }

   getAllFaqs() {
    this.paladionService.getAllFaqs().subscribe(data => {
     // console.log('data: '+JSON.stringify(data.data));
      this.allFaqs = data.data;
      console.log(this.allFaqs);
    })
  }



  ngOnInit() {
  }

}
