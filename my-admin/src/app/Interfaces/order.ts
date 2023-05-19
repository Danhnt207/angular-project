export class Order{
    constructor(
      public _id: any = null,
      public OrderID: string = '',
      public CustomerName: string = '',
      public OrderDate: string = '',
      public ShipDate: string = '',
      public Status: string = '',
      public Phone: string = '',
      public Email: string = '',
      public Address: string = '',
      public PaymentMethod: string = '',
      public TotalPrice: number = 0,
      public PrePrice: number = 0,
      public DeliveryFee: number = 0,
      public DiscountPrice: number = 0,
      public CustomerID: number = 0,
      public RecipientAddressID: number = 0,
      public OrderMedicine: {
        _id: any,
        Name: string,
        Price: string,
        Image: string,
        Description: string,
        Ingredients: string,
        Uses: string,
        Directions: string,
        Store: string,
        Warnings: string,
        Brand: string,
        Manufacturer: string,
        Category: string,
        SubCategory: string,
        quantity: string,
      }[]= []
    ){}
  }
  