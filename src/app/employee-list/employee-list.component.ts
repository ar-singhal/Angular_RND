import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from '../services/employees.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /*employees: Employee[] = [
    {
      empid: 'AW001',
      fname: 'Angular',
      lname: 'Test',
      email: 'Angularweb@asp.net',
      branch:'Trainee'
    },
    {
      empid: 'AW002',
      fname: 'Angular',
      lname: 'Web',
      email: 'Angularweb@asp.net',
      branch: 'IT'
    }

  ];*/
  employees: Employee[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [3, 6, 9, 12];
  
  searchtxt: string = "" ;

  fileName = 'ExcelSheet.xlsx';  

  constructor(private employeesService: EmployeesService) {
    
  }

  ngOnInit(): void {
    this.fetchData();
    
  }

  // download page wise data
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  // download complete data in excel
  public exportAsExcelFile(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.employees);
    var range = XLSX.utils.decode_range(worksheet['!ref']);
    for (var C = range.s.r; C <= range.e.c; ++C) {
      var address = XLSX.utils.encode_col(C) + '1'; // <-- first row, column number C
      if (!worksheet[address]) continue;
      worksheet[address].v = worksheet[address].v.toUpperCase();
    }
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    XLSX.writeFile(workbook, this.fileName);
  }

  fetchData(): void {
    this.employeesService.getEmployee().subscribe({
      next: (e) => {
        this.employees = e;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchData();
  }
  
  search() {
    this.employeesService.searchEmployee(this.searchtxt).subscribe({
      next: (e) => {
        this.employees = e;
        console.log(e);
        
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
