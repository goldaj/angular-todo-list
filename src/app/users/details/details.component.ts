import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string;
  type: string;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe({
      next: (map) => {
        this.id = map.get('id');
        this.type = map.get('type') || 'xml';
      }
    });
  }

  ngOnInit() {
  }

}
