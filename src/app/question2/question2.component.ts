import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Question2Service } from './question2.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['categorie'];
  @ViewChild('paginatorData', { static: true }) paginatorData: MatPaginator | undefined;
  constructor(private question2Service: Question2Service) {
    this.dataSource = new MatTableDataSource();
   }

  async ngOnInit(): Promise<void> {
    const dataApi = await this.question2Service.getData().toPromise().then(res => res.body);
    if (dataApi) {
      const dataCategories = dataApi.map(m => {
        return {'categorie': m}
      })
      this.dataSource.data = dataCategories;
      if (this.paginatorData) {
        this.dataSource.paginator = this.paginatorData;
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
