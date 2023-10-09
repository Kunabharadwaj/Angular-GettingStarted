import {Component} from "@angular/core"

@Component({
    selector: "pm-products",
    templateUrl:"./product-list.component.html"
})
export class ProductListComponent{
    pageTitle: string = "Product List";
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 13, 2023",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "March 21, 2023",
            "description": "Curved claw stell hammer",
            "price": 30.99,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ]
}