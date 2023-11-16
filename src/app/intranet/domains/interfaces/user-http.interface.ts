export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserGeoLocation;
}

export interface UserGeoLocation {
    lat: string;
    lng: string;
}