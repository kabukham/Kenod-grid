import { Component } from '@angular/core';
import { customers } from './customers';
import { Customer, Product } from "./model";
import { MockdataService } from './mockdata.service';
import { DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { State } from "@progress/kendo-data-query";
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendo-grid';
  public gridView: Customer[] = customers;

  public data: any[];
  public pageSize = 100;
  public skip = 0;
  public MockData: MockdataService = new MockdataService;
  interval: NodeJS.Timeout | undefined;

  constructor() {
    this.sendRequest(this.state);


    this.data = this.MockData.createRandomData(101, 0);
    this.gridViewVirtualizationWithLocalData = {
      data: this.data.slice(this.skip, this.skip + this.pageSize),
      total: this.data.length,
    };
  }
 

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    let d = this.MockData.createMoreRandomData(100, 100 * this.count) || [];
    this.count = this.count + 1;
    this.data = this.data?.concat(d);
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridViewVirtualizationWithLocalData = {
      data: this.data.slice(this.skip, this.skip + this.pageSize),
      total: this.data.length,
    };
  }

  public state: State = {
    skip: 0,
    take: 100,
    group: [],
    filter: { filters: [], logic: "and" },
    sort: [],
  };

  public loading = false;
  public gridViewVirtualizationWithLocalData: GridDataResult = { data: [], total: 0 };

  // public dataStateChange(state: DataStateChangeEvent): void {
  //   this.state = state;
  //   //this.sendRequest(state);
  // }
  private count = 1; 
  public sendRequest(state: State): void {
    // this.loading = true;
    // let d = this.MockData.createMoreRandomData(100, (state.take || 0 ) * this.count) || [];
    // this.count = this.count + 1;
    // this.data = d.concat(this.data);
    // console.log("state changed! " + d[d.length - 1].id)
    // this.loading = false;
  }


  public gridDataBasic: Product[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      Children: [
        {
          ProductID: 1.1,
          ParentId:1,
          ProductName: "Child Chai Item ",
          UnitPrice: 18,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages"
          },
        }
      ],
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Children: [
        {
          ProductID: 1.1,
          ParentId:1,
          ProductName: "Child Chai Item ",
          UnitPrice: 18,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages"
          },
        }
      ],
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Children: [
        {
          ProductID: 1.1,
          ParentId:1,
          ProductName: "Child Chai Item ",
          UnitPrice: 18,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages"
          },
        }
      ],
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
  ];


}
