import { Component, OnInit } from '@angular/core';
import { Service420Service } from '../../services/service-420.service';

@Component({
  selector: 'app-comp-420',
  templateUrl: './comp-420.component.html',
  styleUrls: ['./comp-420.component.css']
})
export class Comp420Component implements OnInit {

  constructor(private _service: Service420Service) { }

  ngOnInit() {
  }

}
