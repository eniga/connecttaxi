import { Injectable } from "@angular/core";

@Injectable()

export class VehiclesModel {
    vehicleId: number;
    vechicleName: string;
    vehicleModelId: number;
    vehicleModel: string;
    vehicleTypeId: number;
    vehicleType: string;
    status: number;
}

export class RequestModel {
    id: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    address: string;
    passengers: number;
    duration: number;
    pickupDate: Date;
    pickupTime: Date;
    returnDate: Date;
    paymentMethod: string;
    promo: string;
    vehicleModel: VehicleModel;
    vehicle: VehiclesModel;
    status: number;
}

export class VehicleModel {
    vehicleModelId: number;
    vehicleModel: string;
}

export class AddRecordResponse {
    id: number;
    status: boolean;
    description: string;
}