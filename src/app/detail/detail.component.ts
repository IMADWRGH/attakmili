import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DetailService } from '../services/detail.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  detail !: any[];
  dataSource: any;
  page = 0;
  size = 10;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: DetailService, private dialog: MatDialog) {
    this.loaddata();
  }

  loaddata() {
    this.service.getAllData(this.page, this.size).subscribe(res => {
      this.detail = res;
      this.dataSource = new MatTableDataSource<any>(this.detail);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }


  generateFile(){
    this.service.generateFile().subscribe(
      {
        next(value) {
          console.log("200");
          
        },
        error(err) {
          console.log(err);
          
        },
        complete() {
          console.log();
          
        },
      }
    )
  }





  Openpopup(code: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
      this.loaddata();
    })
  }

}
