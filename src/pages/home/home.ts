import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Toast } from "@ionic-native/toast";
import { DataServiceProvider } from "../../providers/data-service/data-service";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  products: any[] = [];
  selectedProduct: any;
  productFound: boolean = false;
  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    public dataService: DataServiceProvider
  ) {
    // this.dataService.getListDetails().subscribe((data: any) => {
    //   this.products = data;
    // });
    this.products = [
      {
        "plu": "01234567895",
        "name": "Gaming DDR5 RAM 16GB",
        "price": 76,
        "desc": "Gaming DDR5 RAM 16GB PC-128000 For x64 PC"
      },
      {
        "plu": "01234567898",
        "name": "Intel Core i7 3.3GHz",
        "price": 200,
        "desc": "Intel Core i7 3.3GHz L2 16MB 4.6ns"
      }
    ];
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.selectedProduct = this.products.find(
          product => product.plu === barcodeData.text
        );
        if (this.selectedProduct !== undefined) {
          this.productFound = true;
        } else {
          this.productFound = false;
          this.toast
            .show(`Product not found`, "5000", "center")
            .subscribe(toast => {
              console.log(toast);
            });
        }
      },
      err => {
        this.toast.show(err, "5000", "center").subscribe(toast => {
          console.log(toast);
        });
      }
    );
  }
}
